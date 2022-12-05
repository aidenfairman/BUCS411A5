package com.example.apiproject.api;

import com.example.apiproject.model.LikeRecipe;
import com.example.apiproject.service.LikeRecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/likeRecipe")
@RestController
@CrossOrigin("*")
public class LikeRecipeController {

    private final LikeRecipeService likeRecipeService;

    @Autowired
    public LikeRecipeController(LikeRecipeService likeRecipeService) {
        this.likeRecipeService = likeRecipeService;
    }

    @PostMapping(path = "/findByUserId")
    @CrossOrigin("*")
    public @ResponseBody
    List<LikeRecipe> findByUserId(@Autowired @RequestBody LikeRecipe likeRecipe) {
        return likeRecipeService.findByUserId(likeRecipe);
    }

    @PostMapping(path = "/addLikeRecipe")
    @CrossOrigin("*")
    public @ResponseBody
    String addLikeRecipe(@Autowired @RequestBody LikeRecipe likeRecipe) {
        return likeRecipeService.addLikeRecipe(likeRecipe);
    }

    @PostMapping(path = "/delete")
    @CrossOrigin("*")
    public @ResponseBody
    String delete(@Autowired @RequestBody LikeRecipe likeRecipe) {
        return likeRecipeService.delete(likeRecipe);
    }

    @GetMapping(path = "/findAll")
    @CrossOrigin("*")
    public @ResponseBody
    List<LikeRecipe> findAll() {
        return likeRecipeService.findAll();
    }


}
