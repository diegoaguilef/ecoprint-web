json.extract! product, :id, :name, :price, :stock, :sub_category_id, :created_at, :updated_at
json.url product_url(product, format: :json)
