# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'seeding'

# first names available
first_names = [
  "Emma", "Liam", "Olivia", "Noah", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia",
  "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Sofia", "Ella", "Madison", "Scarlett", "Grace",
  "Chloe", "Victoria", "Riley", "Zoe", "Hannah", "Lily", "Layla", "Ellie", "Nora",
  "Hazel", "Zoey", "Penelope", "Mila", "Luna", "Savannah", "Avery", "Aria", "Eleanor", "Hannah",
  "Aiden", "Jackson", "Lucas", "Mateo", "Caleb", "Dylan", "Sebastian", "Elijah", "Liam", "Oliver",
  "Benjamin", "William", "James", "Henry", "Alexander", "Jack", "Leo", "Samuel", "Owen",
  "Levi", "Daniel", "Joseph", "John", "David", "Matthew", "Wyatt", "Luke", "Oscar", "Isaac",
  "Gabriel", "Julian", "Julian", "Ryan", "Jayden", "Nathan", "Jaxon", "Nolan", "Nicholas", "Eli",
  "Tyler", "Michael", "Alexander", "James", "Benjamin", "Daniel", "Henry", "Nicholas", "Matthew", "Jackson",
  "David", "Oliver", "Sebastian", "Joseph", "Andrew", "Gabriel", "Samuel", "William", "John", "Jack", "Jason",
  "Humza", "Raul", "Ethan", "Jasper", "Daniel", "Austin", "David", "Arvindh", "Jarvis", "Andrew", "Kurt", "Bruno",
  "Swarajh", "Aniruth", "Mike", "Ryan", "Shuhuai", "Shivam", "William", "Cindy", "Calvin", "Mandy", "Melanie", "Matthew",
  "Danira", "Diomar", "Dotch", "Dylan", "Diego", "Luis", "Michael", "Liz", "Juan", "Ricardo", "Fernando", "Jose",
  "Carlos"
]

# Lastnames available
last_names = [
  "Nguyen", "Wong", "Kim", "Patel", "Chen", "Yamamoto", "Singh", "Li", "Tan", "Nakamura",
  "Lee", "Kawasaki", "Tran", "Choi", "Ito", "Gupta", "Zhao", "Takahashi", "Kumar", "Liu",
  "Saito", "Sharma", "Chang", "Chung", "Wu", "Huang", "Park", "Das", "Lam", "Chow",
  "Wu", "Lai", "Kwok", "Chong", "Hsu", "Ng", "Suzuki", "Chiu", "Nishimura", "Ngo",
  "Cheung", "Yuan", "Chowdhury", "Chan", "Nishida", "Lim", "Shah", "Sakurai", "Miyamoto", "Rahman",
  "Fan", "Ho", "Yeh", "Joshi", "Wang", "Chee", "Abe", "Pham", "Huang", "Tang",
  "Phan", "Narayan", "Chin", "Sugiyama", "Chen", "Sinha", "Xie", "Wang", "Xiao", "Kawaguchi",
  "Smith", "Johnson", "Brown", "Davis", "Wilson", "Lee", "Taylor", "Miller", "Clark", "Martinez",
  "Anderson", "Wright", "White", "King", "Hall", "Thomas", "Baker", "Harris", "Turner", "Walker",
  "Allen", "Scott", "Baker", "Carter", "Green", "Martinez", "Turner", "Rodriguez", "Nelson", "Carter",

]

# Generates the names array
names = Array.new(1000) { "#{first_names.sample} #{last_names.sample}" }

# Dorms array
dorms = ["Craven", "Crowell", "Edens", "Few", "Hollows", "Keohane", "Kilgo", "Wannamaker"]

# Creates netids
letters = ('A'..'Z').to_a
numbers = ('0'..'9').to_a

netids = names.map do |name|
    "#{letters.sample(2).join}#{numbers.sample(2 + rand(2)).join}"
end

# Creates the users
for i in 1..1000 do
    User.create(name: names[i-1], netid: netids[i-1], points: rand(25..200), reports: rand(0..3), dorm: dorms[rand(0..(dorms.length-1))])
end

puts 'seeded'