# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
admin = User.create! name: "admin", last_name: "user", password: "admin123", email: "admin@ecoprint.cl", role: "admin", rut: "18366475-1"
user = User.create! name: "user", last_name: "registered", password: "user123", email: "user@ecoprint.cl", role: "client", rut: "11111111-1"
passwd = SecureRandom.hex
visit = User.create! name: "visit", last_name: "user", password: passwd, email: "#{passwd}@ecoprint.cl", role: "visit"

region1 = Region.create! name: "Región Metropolitana"
region2 = Region.create! name: "Región del Maule"

commune1 = Commune.create! name: "Macul", region: region1
commune2 = Commune.create! name: "La Pintana", region: region1
commune3 = Commune.create! name: "Puente Alto", region: region1
commune4 = Commune.create! name: "San Clemente", region: region2
commune5 = Commune.create! name: "Talca", region: region2

DeliveryAddress.create! name: "Casa",
                        street_name: "Pdre",
                        street_number: 12967,
                        postal_code: 8820000,
                        alias: "Casa",
                        additional_info: "principal, entregar a este rut si no estoy",
                        commune: commune2,
                        user: user
DeliveryAddress.create! name: "Oficina",
                        street_name: "San Sebastian",
                        street_number: "0869",
                        postal_code: 8820000,
                        alias: "Trbajo",
                        additional_info: "principal, entregar a este rut si no estoy",
                        commune: commune1,
                        user: user

cat1 = Category.create! name: "Vestido"
cat2 = Category.create! name: "Polera"
cat3 = Category.create! name: "Blusa"

subcat1 = SubCategory.create! name: "Largo", category: cat1
subcat2 = SubCategory.create! name: "Corto", category: cat1
subcat3 = SubCategory.create! name: "Mediano", category: cat1

subcat4 = SubCategory.create! name: "Hombre", category: cat2
subcat5 = SubCategory.create! name: "Mujer", category: cat2
subcat6 = SubCategory.create! name: "Unisex", category: cat2

p1 = Product.create! name: "Vestidito bonito", price: 10_000, stock: 10, description: "una prenda muy hermosa", sub_category: subcat1
p2 = Product.create! name: "Vestidito y mas largo", price: 12_000, stock: 9, description: "una prenda muy hermosa que combina contigo", sub_category: subcat2
p3 = Product.create! name: "Vestidito a tu medida", price: 11_000, stock: 13, description: "una prenda comoda que te encantará", sub_category: subcat3

img1 = File.open("app/javascript/img/team/team-1.jpg") 
img2 = File.open("app/javascript/img/team/team-2.jpg") 
img3 = File.open("app/javascript/img/team/team-3.jpg") 
p4 = Product.create! name: "Polera Juvenil", price: 6_000, stock: 7, description: "Polera para conquistar", sub_category: subcat4
p5 = Product.create! name: "Polera Cool", price: 6_000, stock: 4, description: "Polera a tu alcance", sub_category: subcat5
p6 = Product.create! name: "Polera UNisex", price: 8_000, stock: 8, description: "para todo tipo de humano", sub_category: subcat6

p4.image.attach io: img1, filename: "p1.jpg"
p4.save
p5.image.attach io: img2, filename: "p2.jpg"
p5.save
p6.image.attach io: img3, filename: "p3.jpg"
p6.save

# Fuera de Stock, no se guarda
shop = ShoppingCart.create user: user, product: p1, quantity: 11

# Dentro del Stock
shop = ShoppingCart.create! user: user, product: p1, quantity: 9

pp shop
