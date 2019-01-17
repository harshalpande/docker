package study.operations;

import java.lang.reflect.Type;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import study.model.PersonDetails;

public class StringJSON {
	
	Gson gson = new Gson();

	public String toJson(PersonDetails person) {
		String jsonString = gson.toJson(person);
		return jsonString;
	}
	
	public String listToJson(List<PersonDetails> list) {
		String jsonString = gson.toJson(list);
		return jsonString;
	}

	public PersonDetails toObject(String jsonPerson) {
		Type type = new TypeToken<PersonDetails>() {}.getType();
		PersonDetails person = gson.fromJson(jsonPerson, type);
		return person;
	}
	
	public List<PersonDetails> toList(String jsonListPerson) {
		Type type = new TypeToken<List<PersonDetails>>() {}.getType();
		List<PersonDetails> list = gson.fromJson(jsonListPerson, type);
		return list;
	}
	
	

}
