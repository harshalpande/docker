package study;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath(value="webapi")
public class DockerApp extends Application {

	@Override
	public Set<Class<?>> getClasses() {
		Set<Class<?>> returnSet = new HashSet<>();
		
		//Model
		returnSet.add(study.model.PersonDetails.class);
		
		//Resource
		returnSet.add(study.resources.TransactionResource.class);
		
		//Operations
		returnSet.add(study.operations.StringJSON.class);

		//db
		returnSet.add(study.db.CRUDOperations.class);
		
		//filter
		returnSet.add(study.filter.CORSFilter.class);
		
		return returnSet;
	}
}
