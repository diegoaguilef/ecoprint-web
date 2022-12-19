class ApplicationController < ActionController::Base
    before_action :products_list

    def products_list
        @q = Product.ransack(params[:q])
    end

    private

    def after_sign_in_path_for(resource)
        market_products_path
    end

    def after_sign_out_path_for(resource)
        market_products_path
    end
end
