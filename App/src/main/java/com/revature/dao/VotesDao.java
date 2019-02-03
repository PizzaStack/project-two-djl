package com.revature.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.Votes;

@Repository
public interface VotesDao extends JpaRepository<Votes, Integer>{
	
	Votes findByMapname(String mapname);
	
	//@Transactional
	//List<MapUsers>

}