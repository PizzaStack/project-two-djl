package com.revature.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.Comments;

@Repository
public interface CommentsDao extends JpaRepository<Comments, Integer>{
	
	Comments findBymapname(String mapname);
	
	//@Transactional
	//List<MapUsers> 

}