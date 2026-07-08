package com.cognizant.spring_learn.service;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cognizant.spring_learn.model.Country;

import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;

@Service
public class CountryService {


    public Country getCountry(String code) {

        List<Country> countries = getCountries();

        for (Country country : countries) {

            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }

        return null;
    }


    private List<Country> getCountries() {

        List<Country> countries = new ArrayList<>();

        try {

            InputStream input =
                    getClass()
                    .getClassLoader()
                    .getResourceAsStream("country.xml");


            Document document =
                    DocumentBuilderFactory
                    .newInstance()
                    .newDocumentBuilder()
                    .parse(input);


            NodeList list =
                    document.getElementsByTagName("country");


            for(int i=0;i<list.getLength();i++) {

                String code =
                    list.item(i)
                    .getChildNodes()
                    .item(1)
                    .getTextContent();


                String name =
                    list.item(i)
                    .getChildNodes()
                    .item(3)
                    .getTextContent();


                countries.add(new Country(code,name));
            }


        } catch(Exception e) {

            e.printStackTrace();

        }


        return countries;
    }
}