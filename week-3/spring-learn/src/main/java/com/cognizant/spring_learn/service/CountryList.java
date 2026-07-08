package com.cognizant.spring_learn.service;

import java.util.List;

import com.cognizant.spring_learn.model.Country;

import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;


@XmlRootElement(name="countries")
public class CountryList {


    private List<Country> countries;


    public List<Country> getCountries() {
        return countries;
    }


    @XmlElement(name="country")
    public void setCountries(List<Country> countries) {
        this.countries = countries;
    }
}