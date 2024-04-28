const routes = {
    home: "/",
    forgotPassword: "/forgotPassword",
    resetPassword: "/forgotPassword/reset/:userId/:token",
    feedback: (feedback = ":userId") => `/feedback/${feedback}`,
    profil: (profil = ":userId") => `/profil/${profil}`,
    viewerPDF: "/viewerPDF",
    
};
export default routes;