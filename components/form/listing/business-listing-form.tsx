"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import PlacesAutocomplete from "@/components/ui/places-autocomplete";

const initialValues = {
  businessName: "",
  phone: {
    areaCode: "",
    number: null,
  },
  locationDetails: {
    address: "",
    suburb: "",
    city: "",
    postcode: "",
    onlineOnly: false,
  },
  account: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

const areaCodes = [
  "03",
  "04",
  "06",
  "07",
  "09",
  "0800",
  "0508",
  "0900",
  "020",
  "021",
  "022",
  "027",
  "028",
  "029",
];

const BusinessListingSchema = Yup.object().shape({
  businessName: Yup.string().required("Business name is required"),
  phone: Yup.object().shape({
    areaCode: Yup.string().required("Area code is required"),
    number: Yup.number().required("Phone number is required"),
  }),
  locationDetails: Yup.object().shape({
    address: Yup.string().notRequired(),
    suburb: Yup.string().notRequired(),
    city: Yup.string().notRequired(),
    postcode: Yup.string().notRequired(),
    onlineOnly: Yup.boolean(),
  }),
  account: Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  }),
});

export const BusinessListingForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: BusinessListingSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

   const [selected, setSelected] = useState(null);

   console.log(selected)
  return (
    <form onSubmit={formik.handleSubmit} className="mt-48 max-w-[600px]">
      <div className="grid gap-4">
        <h2 className="text-2xl font-semibold">Business Details</h2>
        <div className="grid gap-2">
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            type="text"
            autoCapitalize="businessName"
            autoComplete="email"
            autoCorrect="off"
            className={`${
              formik.errors.businessName && formik.touched.businessName
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }`}
            {...formik.getFieldProps("businessName")}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>

          <div className="flex space-x-2">
            <Select>
              <SelectTrigger className="w-28">
                <SelectValue placeholder="09" />
              </SelectTrigger>
              <SelectContent>
                {areaCodes.map((areaCode) => (
                  <SelectItem value={areaCode}>{areaCode}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              id="phone"
              type="tel"
              autoCapitalize="phone"
              autoComplete="phone"
              autoCorrect="off"
              inputMode="numeric"
              className={`${
                formik.errors.phone?.number && formik.touched.phone?.number
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }`}
              {...formik.getFieldProps("phone.number")}
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold">Business Location</h2>
        <div className="grid gap-2">
          <div className="items-top flex space-x-2">
            <Checkbox id="onlineOnly" />
            <Label htmlFor="onlineOnly">Online Only</Label>
          </div>
        </div>
         <div className="grid gap-2">
              <PlacesAutocomplete setSelected={setSelected}/>
          </div>
        <Button>Add listing</Button>
      </div>
    </form>
  );
};
