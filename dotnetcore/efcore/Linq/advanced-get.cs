// public class CustomerOrder
// {
//     public int OrderId { get; set; }
//     public string OrderPlaced { get; set; }
//     public string OrderFulfilled { get; set; }
//     public string CustomerName { get; set; }
//     public IEnumerable<OrderLineItem> OrderLineItems { get; set; }
// }


public async Task<List<CustomerOrder>> GetAll()
{
    List<CustomerOrder> orders = await (
        from o in _context.Orders.AsNoTracking()
        orderby o.OrderPlaced descending
        select new CustomerOrder
        {
            OrderId = o.Id,
            CustomerName = $"{o.Customer.LastName}, {o.Customer.FirstName}",
            OrderFulfilled = o.OrderFulfilled.HasValue ? 
                o.OrderFulfilled.Value.ToShortDateString() : string.Empty,
            OrderPlaced = o.OrderPlaced.ToShortDateString(),
            OrderLineItems = (from po in o.ProductOrders
                              select new OrderLineItem
                              {
                                  ProductQuantity = po.Quantity,
                                  ProductName = po.Product.Name
                              })
        })
        .ToListAsync();

    return orders;
}


// An asynchronous method returns a Task<List<CustomerOrder>>.
// The target entity, _context.Orders, is referenced in the from clause.
// Change tracking of entities is disabled, via AsNoTracking, to denote a read-only query to EF Core. The result is reduced overhead and improved performance.
// The select clause projects the result set into a CustomerOrder object. This practice allows us to shape the result set to satisfy the business requirements. In some cases, it may be appropriate to use the domain model without projection, however. See this tutorial for an example.
// The orderby clause sorts the result set in a descending manner, by the order placed date.
// Each CustomerOrder object's OrderLineItems property in the result set is populated by a nested LINQ query.



private IQueryable<Order> GetOrderById(int id) =>
    from o in _context.Orders.AsNoTracking()
    where o.Id == id
    select o;

public async Task<CustomerOrder> GetById(int id)
{
    CustomerOrder order = await (
        from o in GetOrderById(id)
        select new CustomerOrder
        {
            OrderId = o.Id,
            CustomerName = $"{o.Customer.LastName}, {o.Customer.FirstName}",
            OrderFulfilled = o.OrderFulfilled.HasValue ? 
                o.OrderFulfilled.Value.ToShortDateString() : string.Empty,
            OrderPlaced = o.OrderPlaced.ToShortDateString(),
            OrderLineItems = (from po in o.ProductOrders
                              select new OrderLineItem
                              {
                                  ProductQuantity = po.Quantity,
                                  ProductName = po.Product.Name
                              })
        })
        .FirstOrDefaultAsync();

    return order;
}


// A GetOrderById method defines how to retrieve an order by ID. The IQueryable<T> return type indicates the query's intent. Query execution is deferred.
// A GetById method composes on top of the query defined in GetOrderById. The result set is projected into a CustomerOrder object. The query defined in GetOrderById is finally executed by the call to FirstOrDefaultAsync.



public async Task<Order> Create(Order newOrder)
{
    newOrder.OrderPlaced = DateTime.UtcNow;

    _context.Orders.Add(newOrder);
    await _context.SaveChangesAsync();

    return newOrder;
}


// Sets the order placed date to the current timestamp in UTC format.
// Asynchronously saves the modified Order object to the database by calling SaveChangesAsync. The Order object modifications exist only in memory. When SaveChangesAsync is called, the in-memory object changes are persisted to the database. For most Database Providers, calling SaveChanges or SaveChangesAsync creates a database transaction. All operations within the transaction either succeed or fail as an atomic unit.
// Returns the completed Order object as represented in the Orders table.


//UPDATE
public async Task<bool> SetFulfilled(int id)
{
    bool isFulfilled = false;
    Order order = await GetOrderById(id).FirstOrDefaultAsync();

    if (order != null)
    {
        order.OrderFulfilled = DateTime.UtcNow;
        _context.Entry(order).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        isFulfilled = true;
    }

    return isFulfilled;
}


// If the order is found, the OrderFulfilled property is set to the current UTC timestamp. The modified object is saved to the database, and a value of true is returned.
// If the order isn't found, false is returned.

//When modifying an entity returned by a query with change tracking disabled, it is essential to explicitly set the entity state. Otherwise, a call to SaveChanges or SaveChangesAsync doesn't modify the underlying table data. In the preceding example, the Order entity is returned in a detached state. Removing the AsNoTracking call in the GetOrderById method's query would make explicitly setting the state unnecessary.



public async Task<bool> Delete(int id)
{
    bool isDeleted = false;
    Order order = await GetOrderById(id).FirstOrDefaultAsync();

    if (order != null)
    {
        _context.Remove(order);
        await _context.SaveChangesAsync();
        isDeleted = true;
    }

    return isDeleted;
}