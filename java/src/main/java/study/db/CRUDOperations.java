package study.db;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;
import org.hibernate.service.ServiceRegistry;

import study.model.PersonDetails;

public class CRUDOperations {

	/**
	 * @return Session object
	 */
	public Session getSession() {
		Configuration conf = new Configuration().configure();
		conf.addClass(PersonDetails.class);

		ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(conf.getProperties())
				.build();

		SessionFactory sessionFactory = conf.buildSessionFactory(serviceRegistry);
		Session session = sessionFactory.openSession();
		return session;
	}
	
	public void createUpdatePerson(PersonDetails person) {

		Session session = getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			// do some work
			session.saveOrUpdate(person);

			transaction.commit();
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			throw e;
		} finally {
			session.close();
		}
	}
	
	public void deletePerson(String user) {
		Session session = getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			// do some work
			session.delete("PersonDetails", user);

			transaction.commit();
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			throw e;
		} finally {
			session.close();
		}
	}
	
	public List<PersonDetails> getAllPersons() {
		List<PersonDetails> resultList;
		Session session = getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			// do some work
			Query query = session.createQuery("from PersonDetails");
			resultList = query.list();
			transaction.commit();
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			throw e;
		} finally {
			session.close();
		}
		
		return resultList;
	}

}
