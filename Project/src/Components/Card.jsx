import React from 'react'

const Card = () => {
    const people = [
        { id: 1,name: "Aarav Sharma",pic: "https://i.pravatar.cc/150?img=11",age: 28,role: "Frontend Developer",city: "Patna",email: "aarav.sharma@example.com" },
        { id: 2,  name: "Priya Verma",    pic: "https://i.pravatar.cc/150?img=47", age: 25, role: "UI/UX Designer",     city: "Delhi",     email: "priya.verma@example.com" },
        { id: 3,  name: "Rohan Mehta",    pic: "https://i.pravatar.cc/150?img=12", age: 31, role: "Backend Developer",  city: "Mumbai",    email: "rohan.mehta@example.com" },
        { id: 4,  name: "Ananya Iyer",    pic: "https://i.pravatar.cc/150?img=44", age: 27, role: "Data Analyst",       city: "Chennai",   email: "ananya.iyer@example.com" },
        { id: 5,  name: "Vikram Singh",   pic: "https://i.pravatar.cc/150?img=13", age: 34, role: "Project Manager",    city: "Jaipur",    email: "vikram.singh@example.com" },
        { id: 6,  name: "Sneha Reddy",    pic: "https://i.pravatar.cc/150?img=45", age: 26, role: "QA Engineer",        city: "Hyderabad", email: "sneha.reddy@example.com" },
        { id: 7,  name: "Arjun Nair",     pic: "https://i.pravatar.cc/150?img=14", age: 29, role: "DevOps Engineer",    city: "Kochi",     email: "arjun.nair@example.com" },
        { id: 8,  name: "Kavya Gupta",    pic: "https://i.pravatar.cc/150?img=49", age: 24, role: "Content Writer",     city: "Lucknow",   email: "kavya.gupta@example.com" },
        { id: 9,  name: "Rahul Das",      pic: "https://i.pravatar.cc/150?img=15", age: 32, role: "Full Stack Developer", city: "Kolkata", email: "rahul.das@example.com" },
        { id: 10, name: "Neha Joshi",     pic: "https://i.pravatar.cc/150?img=48", age: 30, role: "Product Manager",    city: "Pune",      email: "neha.joshi@example.com" },
        { id: 11, name: "Siddharth Rao",  pic: "https://i.pravatar.cc/150?img=17", age: 27, role: "Mobile Developer",   city: "Bengaluru", email: "siddharth.rao@example.com" },
        { id: 12, name: "Meera Kapoor",   pic: "https://i.pravatar.cc/150?img=43", age: 28, role: "Marketing Lead",     city: "Chandigarh",email: "meera.kapoor@example.com" }
];


    return (
        <div className="card-container">
            {people.map((person) => (
                <div className="card" key={person.id}>
                    <img src={person.pic} alt={person.name} />
                    <h3>{person.name}</h3>
                    <p className="role">{person.role}</p>
                    <p className="meta">{person.age} yrs · {person.city}</p>
                    <a className="email" href={`mailto:${person.email}`}>
                        {person.email}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Card
