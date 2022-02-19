package com.medicalcenter.repositories;

import com.querydsl.core.types.dsl.BooleanExpression;

public interface DoctorRepositoryCustom{
    BooleanExpression getCondition(String fio, long id);
}
