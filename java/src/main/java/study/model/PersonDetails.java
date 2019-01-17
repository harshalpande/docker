package study.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PersonDetails {
	
	@Id
	@Column(name = "FIRST_NAME")
	private String name;
	
	@Column(name = "LAST_NAME")
	private String surname;
	
	@Column(name = "TELEPHONE")
	private String mobileNo;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

}
