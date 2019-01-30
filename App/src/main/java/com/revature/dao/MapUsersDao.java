package com.revature.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.MapUsers;

@Repository
public interface MapUsersDao extends JpaRepository<MapUsers, Integer>{
	
	MapUsers findByUsername(String username);
	
	//@Transactional
	//List<MapUsers> 
	
	
	

}