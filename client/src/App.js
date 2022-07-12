import React from "react";
import { Layout } from "antd";
import Home from "./components/Home";
import styles from "./styles";
import AppBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";

const { Footer } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout style={styles.layout}>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authform" element={<AuthForm />} />
        </Routes>
        <Footer style={styles.footer}>&copy; All rights reserved 2022 Instaverse</Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
