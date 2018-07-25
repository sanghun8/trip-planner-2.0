package com.gustavo.tripplanner.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gustavo.tripplanner.models.User;
import com.gustavo.tripplanner.repositories.UserRepository;

@Service
public class UserService {
	private final UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	//create
	public User createUser(User user) {
		return userRepository.save(user);
	}
	//read
	public User findUserById(Long id) {
		Optional<User>user = userRepository.findById(id);
		if(user.isPresent())return user.get();
		else return null;
	}
	//update
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	//delete
	public void deleteUserById(Long id) {
		userRepository.deleteById(id);
	}
	//find all
	public List<User>findAllUsers(){
		return userRepository.findAll();
	}
	
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	//doesn't include bcrypt add it eventually
	public boolean authenticateUser(String email, String password) {
		User user = userRepository.findByEmail(email);
		if(user == null) {
			return false;
		} else {
			if(password.equals(user.getPassword())) {
				return true;
			} else {
				return false;
			}
		}
	}
}
