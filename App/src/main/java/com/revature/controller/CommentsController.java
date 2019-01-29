package com.revature.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.persistence.Table;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

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
