package com.example.apiproject.dao;

import com.example.apiproject.model.FitnessGoal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FitnessGoalRepo extends JpaRepository<FitnessGoal,Integer> {
    FitnessGoal findFitnessGoalByUserId(String userId);
}
