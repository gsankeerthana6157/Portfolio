const Projects = () => (
  <section id="projects" className="section-alt">
    <h2 className="section-title">Projects</h2>
    <div className="card-grid">
      <div className="card">
        <h3>Sales Data Importer</h3>
        <p>Python + SQLite desktop app with GUI for importing sales records.</p>
      </div>
      <div className="card">
        <h3>ASL Image Classifier</h3>
        <p>Deep learning project using CNNs and PyTorch to classify sign language gestures.</p>
      </div>
      <div className="card">
        <h3>Portfolio Website</h3>
        <p>Built with React & Vite. Fully responsive and deployed on GitHub Pages.</p>
      </div>
    </div>
  </section>
);

export default Projects;
