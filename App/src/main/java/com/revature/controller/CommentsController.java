package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dao.CommentsDao;
import com.revature.entity.Comments;

@RestController
public class CommentsController {

	@Autowired
	CommentsDao dao;

	@GetMapping("/comments")
	public List<Comments> getAll() {
		return dao.findAll();
	}
	
}
