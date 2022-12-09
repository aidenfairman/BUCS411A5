package com.example.apiproject.service;

import com.example.apiproject.dao.FitnessGoalRepo;
import com.example.apiproject.model.FitnessGoal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FitnessGoalService {

    private final FitnessGoalRepo fitnessGoalRepo;

    @Autowired
    public FitnessGoalService(FitnessGoalRepo fitnessGoalRepo) {
        this.fitnessGoalRepo = fitnessGoalRepo;
    }

    //add new or update
    public String addFitnessGoal(FitnessGoal fitnessGoal) {
        FitnessGoal fitnessGoal1 = fitnessGoalRepo.findFitnessGoalByUserId(fitnessGoal.getUserId());
        if (fitnessGoal1 == null) {
            fitnessGoalRepo.saveAndFlush(fitnessGoal);
        }
        else {
            fitnessGoal1.setGoal(fitnessGoal.getGoal());
            fitnessGoalRepo.saveAndFlush(fitnessGoal1);
        }
        return "Add Successfully";
    }

    //delete
    public String delete(FitnessGoal fitnessGoal) {
        FitnessGoal fitnessGoal1 = fitnessGoalRepo.findFitnessGoalByUserId(fitnessGoal.getUserId());
        if (fitnessGoal1 == null) {
            return "No such fitness goal!";
        }
        else {
            fitnessGoalRepo.delete(fitnessGoal1);
            return "Delete Successfully";
        }
    }

    //find all
    public List<FitnessGoal> findAll() {
        return fitnessGoalRepo.findAll();
    }

    //find by user
    public FitnessGoal findByUserId(FitnessGoal fitnessGoal) {
        return fitnessGoalRepo.findFitnessGoalByUserId(fitnessGoal.getUserId());
    }
}
