import streamlit as st
from PIL import Image

# --- Page Configuration ---
st.set_page_config(page_title="My Portfolio", page_icon="👨‍💻", layout="wide")

# --- Load Assets ---
profile_pic = Image.open("profile.jpg")  # Replace with your profile image
resume_file = "resume.pdf"  # Replace with your actual resume file

# --- Styling ---
st.markdown("""
    <style>
        .title {
            font-size: 48px;
            font-weight: bold;
            color: #2c3e50;
        }
        .section-title {
            font-size: 32px;
            font-weight: 600;
            color: #34495e;
            margin-top: 20px;
        }
        .contact-info {
            font-size: 18px;
            line-height: 1.6;
        }
        .project-card {
            background-color: #ecf0f1;
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 1rem;
        }
        .connect-icon {
            font-size: 20px;
            color: #2980b9;
            font-weight: bold;
        }
    </style>
""", unsafe_allow_html=True)

# --- Header ---
col1, col2 = st.columns([1, 3])
with col1:
    st.image(profile_pic, width=180)
with col2:
    st.markdown('<div class="title">Shashidhar Reddy</div>', unsafe_allow_html=True)
    st.write("🚀 Final year student | Python Dev | Streamlit Enthusiast")
    st.download_button("📄 Download Resume", data=open(resume_file, "rb"), file_name="Shashidhar_Resume.pdf")

# --- About Me ---
st.markdown('<div class="section-title">About Me</div>', unsafe_allow_html=True)
st.write("""
Hi! I'm a tech-savvy developer passionate about building clean and functional apps.
I've worked on dashboard projects, feature-review analysis, and interactive tools with Streamlit and Python.
Always curious, always building. Let's connect!
""")

# --- Projects ---
st.markdown('<div class="section-title">Projects</div>', unsafe_allow_html=True)

projects = [
    {
        "title": "🧠 Review Dashboard",
        "description": "Built an emoji-based review sentiment dashboard using Streamlit and Plotly for Zoom, Firefox, and Webex."
    },
    {
        "title": "📊 Area Graph Analyzer",
        "description": "Visualized features vs. reviews over time using area graphs, with interactive tabbed layouts and a stylish navbar."
    },
    {
        "title": "🖼️ AI Art Transformer",
        "description": "Converted user-uploaded images into Ghibli and Lego styles using deep learning art filters."
    }
]

for project in projects:
    st.markdown(f"""
        <div class="project-card">
            <strong>{project["title"]}</strong>
            <p>{project["description"]}</p>
        </div>
    """, unsafe_allow_html=True)

# --- Skills ---
st.markdown('<div class="section-title">Skills</div>', unsafe_allow_html=True)
st.write("""
- 🐍 Python, Pandas, NumPy  
- 📈 Plotly, Streamlit, Matplotlib  
- 🌐 HTML/CSS, JavaScript (Basics)  
- 📊 Excel, Data Analysis  
- 💡 Git, GitHub, VS Code  
""")

# --- Contact ---
st.markdown('<div class="section-title">Contact</div>', unsafe_allow_html=True)
st.markdown("""
<div class="contact-info">
📧 Email: <a href="mailto:shashidharreddygk@gmail.com">shashidharreddygk@gmail.com</a> <br>
🔗 LinkedIn: [linkedin.com/in/shashidhar](https://linkedin.com) <br>
🐙 GitHub: [github.com/shashidhar](https://github.com) <br>
</div>
""", unsafe_allow_html=True)

# --- Connect Me Icon ---
st.markdown("""
<div class="connect-icon">
📬 <a href="mailto:shashidharreddygk@gmail.com">Connect with Me</a>
</div>
""", unsafe_allow_html=True)
