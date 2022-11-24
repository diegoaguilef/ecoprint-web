class ApplicationController < ActionController::Base
    before_action :products_list

    def products_list
        @q = Product.ransack(params[:q])
    end
end
