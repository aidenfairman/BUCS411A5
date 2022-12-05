package com.example.apiproject.dao;

import com.example.apiproject.model.LikeRecipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeRecipeRepo extends JpaRepository<LikeRecipe,Integer> {

    LikeRecipe findLikeRecipeByUserIdAndAndRecipeId(String userId, String recipeId);
    List<LikeRecipe> findLikeRecipesByUserId(String userId);
}
