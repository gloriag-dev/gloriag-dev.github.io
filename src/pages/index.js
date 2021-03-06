import React from "react"

import style from "./Home.module.scss"

import Navbar from "../components/Navbar"
import Cover from "../components/Cover"
import MyWorks from "../components/MyWorks"
import WhatIDo from "../components/WhatIDo"
import MyTechStack from "../components/MyCompleteTechStack"
import ContactMeForm from "../components/ContactMeForm"
import Footer from "../components/Footer"
import Head from "next/head"

export default function Home() {
   return (<div className={style.home}>
      <Head>
      <title>Gloria's Portfolio</title>
      </Head>
      <Navbar />
       <Cover />
      <MyWorks />
      <WhatIDo />
      <MyTechStack />
      <ContactMeForm />
      <Footer />
   </div>)
}