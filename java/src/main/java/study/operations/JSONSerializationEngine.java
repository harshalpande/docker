package study.operations;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JSONSerializationEngine {

	/**
	 * Takes map and returns String
	 * @param map
	 * @return
	 */
	/*public String mapToString(Map<?, ?> map) {
		System.gc();
		try {
			return JSONUtil.serialize(map, null, null, false, false, true);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return null;
	}*/
	
	public String objectToString(Object obj) {
		System.gc();
		ObjectMapper mapper = new ObjectMapper();
		try {
			return mapper.writeValueAsString(obj);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}

}
