package study;

import study.model.PersonDetails;
import study.operations.StringJSON;

public class Test {
	
	public static void main(String[] args) {
		PersonDetails person = new PersonDetails();
		
		person.setName("harshal");
		person.setSurname("pande");
		person.setMobileNo("9096008594");
		
		StringJSON jsonUtility = new StringJSON();
		
		System.out.println(jsonUtility.toJson(person));
	}
}
