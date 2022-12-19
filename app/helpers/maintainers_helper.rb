module MaintainersHelper
    def association_name(entity, association, id)
        association = association.to_s.delete_suffix("_id").to_sym
        entity.association(association).reflection.class_name.constantize.find(id).name
    end

    def association_collection(entity, association)
        association = association.to_s.delete_suffix("_id").to_sym
        entity.association(association).reflection.class_name.constantize.all
    end
        
end
