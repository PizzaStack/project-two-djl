package com.revature.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.Maps;

@Repository
public interface MapsDao extends JpaRepository<Maps, Integer>{
	
	Maps findByMapname(String mapname);
	
	//@Transactional
	//List<MapUsers> 

}