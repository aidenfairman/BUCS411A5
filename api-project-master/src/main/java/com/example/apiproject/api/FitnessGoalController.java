package com.example.apiproject.api;

import com.example.apiproject.model.FitnessGoal;
import com.example.apiproject.service.FitnessGoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/fitnessGoal")
@RestController
@CrossOrigin("*")
public class FitnessGoalController {

    private final FitnessGoalService fitnessGoalService;

    @Autowired
    public FitnessGoalController(FitnessGoalService fitnessGoalService) {
        this.fitnessGoalService = fitnessGoalService;
    }

    @PostMapping(path = "/findByUserId")
    @CrossOrigin("*")
    public @ResponseBody
    FitnessGoal findByUserId(@Autowired @RequestBody FitnessGoal fitnessGoal) {
        return fitnessGoalService.findByUserId(fitnessGoal);
    }

    @GetMapping(path = "/findAll")
    @CrossOrigin("*")
    public @ResponseBody
    List<FitnessGoal> findAll() {
        return fitnessGoalService.findAll();
    }

    @PostMapping(path = "/addFitnessGoal")
    @CrossOrigin("*")
    public @ResponseBody
    String addFitnessGoal(@Autowired @RequestBody FitnessGoal fitnessGoal) {
        return fitnessGoalService.addFitnessGoal(fitnessGoal);
    }

    @PostMapping(path = "/delete")
    @CrossOrigin("*")
    public @ResponseBody
    String delete(@Autowired @RequestBody FitnessGoal fitnessGoal) {
        return fitnessGoalService.delete(fitnessGoal);
    }
}
