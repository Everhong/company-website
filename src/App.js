import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import logo from "./images/logo32.png"; // 公司的logo图片
import deliveryImage from "./images/delivery.jpg"; // 配送图片

function App() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // 模拟物流追踪功能
  const trackPackage = () => {
    // 假设这是从服务器获取的追踪数据
    setTrackingInfo(`追踪码 ${trackingNumber} 的包裹正在配送中，预计到达时间：3天`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 发送邮件
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("service_jq7pnrd", "template_chsdpr3", formData, "OkQYV4tnxTr04W5ir")
      .then(
        (response) => {
          alert("邮件已成功发送！");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("邮件发送失败：" + error.text);
        }
      );
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <img src={logo} alt="Company Logo" className="logo" />
        <nav>
          <ul>
            <li>主页</li>
            <li>服务</li>
            <li>关于我们</li>
            <li>联系我们</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>快速、可靠的配送服务</h1>
        <p>让您的货物在全球范围内快速、安全地到达目的地。</p>
        <button>立即获取报价</button>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>我们的服务</h2>
        <div className="service-cards">
          <div className="card">
            <img src={deliveryImage} alt="国内配送" />
            <h3>国内配送</h3>
            <p>提供全国范围内的极速配送服务，确保您的货物安全、及时到达。</p>
          </div>
          <div className="card">
            <img src={deliveryImage} alt="国际配送" />
            <h3>国际配送</h3>
            <p>无论是跨国还是跨洲，我们都能提供灵活的国际配送解决方案。</p>
          </div>
          <div className="card">
            <img src={deliveryImage} alt="仓储服务" />
            <h3>仓储服务</h3>
            <p>提供专业的仓储管理，优化库存流程，提高配送效率。</p>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="tracking">
        <h2>物流跟踪</h2>
        <input
          type="text"
          placeholder="输入追踪码"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button onClick={trackPackage}>跟踪包裹</button>
        {trackingInfo && <p>{trackingInfo}</p>}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>客户评价</h2>
        <p>"我们一直使用这家公司的配送服务，效率非常高，客服也很棒!" - 客户A</p>
        <p>"国际配送速度惊人，且包裹完好无损!" - 客户B</p>
      </section>

      {/* Contact Us Section */}
      <section className="contact">
        <h2>联系我们</h2>
        <p>电话: 123-456-7890</p>
        <p>邮箱: contact@delivery.com</p>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="您的名字"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="您的邮箱"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="您的消息"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">发送消息</button>
        </form>
      </section>
      {/* Footer */}
      <footer>
        <p>© 2025 一心のDELIVERY. 保留所有权利.</p>
      </footer>
    </div>
  );
}

export default App;
