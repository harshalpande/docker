package study.resources;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import study.db.CRUDOperations;
import study.model.PersonDetails;
import study.operations.StringJSON;

@Path("persons")
public class TransactionResource {
	
	CRUDOperations crud = new CRUDOperations();
	StringJSON jsonUtility = new StringJSON();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPersons() {
		List<PersonDetails> allPersons = crud.getAllPersons();
		return Response.status(Status.OK).entity(jsonUtility.listToJson(allPersons)).build();
	}
	
	@POST
	public Response addPerson(String personInJson) {
		PersonDetails person = jsonUtility.toObject(personInJson);
		crud.createUpdatePerson(person);
		return Response.status(Status.CREATED).entity(person.getName() + " Added!!!").build();
	}
	
	@DELETE
	public Response deletePerson(String personInJson) {
		PersonDetails person = jsonUtility.toObject(personInJson);
		crud.deletePerson(person.getName());
		return Response.status(Status.OK).entity(person.getName() + " Deleted!!!").build();
	}

}
