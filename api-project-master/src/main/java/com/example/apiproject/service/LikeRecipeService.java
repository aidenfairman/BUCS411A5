package com.example.apiproject.service;

import com.example.apiproject.dao.LikeRecipeRepo;
import com.example.apiproject.model.LikeRecipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Date;
import java.util.List;

@Service
public class LikeRecipeService {

    private final LikeRecipeRepo likeRecipeRepo;

    @Autowired
    public LikeRecipeService(LikeRecipeRepo likeRecipeRepo) {
        this.likeRecipeRepo = likeRecipeRepo;
    }


    public String addLikeRecipe(LikeRecipe likeRecipe) {
        LikeRecipe likeRecipe1 = likeRecipeRepo.findLikeRecipeByUserIdAndAndRecipeId(likeRecipe.getUserId(),likeRecipe.getRecipeId());
        if (likeRecipe1 == null) {
            long millis=System.currentTimeMillis();
            Date currentDate = new Date(millis);
            likeRecipe.setDate(currentDate);
            likeRecipeRepo.saveAndFlush(likeRecipe);
            return "Add Successfully!";
        }
        else {
            return "You already Liked it!";
        }
    }

    public List<LikeRecipe> findByUserId(LikeRecipe likeRecipe) {
        return likeRecipeRepo.findLikeRecipesByUserId(likeRecipe.getUserId());
    }

    public String delete(LikeRecipe likeRecipe) {
        LikeRecipe likeRecipe1 = likeRecipeRepo.findLikeRecipeByUserIdAndAndRecipeId(likeRecipe.getUserId(),likeRecipe.getRecipeId());
        if (likeRecipe1 != null) {
            likeRecipeRepo.delete(likeRecipe1);
            return "Delete Successfully!";
        }
        else {
            return "There is no such recipe";
        }
    }

    public List<LikeRecipe> findAll() {
        return likeRecipeRepo.findAll();
    }

}
