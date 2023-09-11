exports.homepage = async (req, res) => {
    const locals = {
        title: 'Nodejs Notes',
        description: ' Free Nodejs Notes App'
      }
      res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
      });
}

exports.about = async (req, res) => {
    const locals = {
        title: 'About Nodejs Notes',
        description: ' Free Nodejs Notes App'
      }
      res.render('about', locals);
}
exports.features = async (req, res) => {
  const locals = {
      title: 'features Nodejs Notes',
      description: ' Free Nodejs Notes App'
    }
    res.render('features', locals);
}