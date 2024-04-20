const routes = {
    home: "/",
    feedback: (feedback = ":userId") => `/feedback/${feedback}`,
    profil: (profil = ":userId") => `/profil/${profil}`,
    
};

export default routes;