
List<IRental> rentals = new List<IRental>();

rentals.Add(new Car() { CurrentRenter: "Car Renter"});
rentals.Add(new Truck() { CurrentRenter: "Truck Renter"});
rentals.Add(new SailBoat() { CurrentRenter: "SailBoat Renter"});

foreach(var r in rentals)
{
    Console.WriteLine(r.CurrentRenter);
    if(r is Car c)
    {
        c.StartEngine();
    }
}

public interface IRental
{
    public int RentalId {get; set;}
    public string CurrentRenter {get; set;}
    public int RentPrice {get; set;}
}

public class LandVehicle 
{
    public int NumberOfPassengers {get; set;}

    public void StartEngine() 
    {
        Console.WriteLine("Engine is Started");
    }
}

public class Car : LandVehicle, IRental
{
    public int RentalId {get; set;}
    public string CurrentRenter {get; set;}
    public int RentPrice {get; set;}
}

public class Truck : LandVehicle, IRenta;
{
    public int RentalId {get; set;}
    public string CurrentRenter {get; set;}
    public int RentPrice {get; set;}
    public string TruckType {get; set;}
}

public class SailBoat : IRental
{
    public int RentalId {get; set;}
    public string CurrentRenter {get; set;}
    public int RentPrice {get; set;}
}