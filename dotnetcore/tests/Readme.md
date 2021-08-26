Fake large number of data generator = Bogus

public IEnumerable<Customer> Generate()
{
    int id = 0;
    Randomizer.Seed = new Random(1234);

    var CustomerFaker = new Faker<Customer>()
                            .RuleFor(t => t.CustomerId, f => "T" + (++id))
                            .RuleFor(t => t.CompanyName, f => f.Company.CompanyName())
                            .RuleFor(t => t.Address, f => f.Addresses.StreetAddresses())
                            .RuleFor(t => t.Name, f => f.Name.FullName()
}