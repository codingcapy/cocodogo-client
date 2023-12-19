
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout";
import HomePage, { pageLoader } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PostsPage, { postsLoader } from "./pages/PostsPage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailsPage, { postDetailsLoader } from "./pages/PostDetailsPage";
import ProfilePage, { userPostsLoader } from "./pages/ProfilePage";
import MaintenancePage from "./pages/MaintenancePage";

export function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/cocodogo-client/" element={<HomePage />} loader={pageLoader} />
                <Route path="/cocodogo-client/posts" element={<PostsPage />} loader={postsLoader} />
                <Route path="/cocodogo-client/users/login" element={<LoginPage />} />
                <Route path="/cocodogo-client/users/signup" element={<SignupPage />} />
                <Route path="/cocodogo-client/posts/create" element={<CreatePostPage />} />
                <Route path="/cocodogo-client/posts/:postId" element={<PostDetailsPage />} loader={postDetailsLoader} />
                <Route path="/cocodogo-client/users/:userId" element={<ProfilePage />} loader={userPostsLoader} />
                <Route path="/cocodogo-client/maintenance" element={<MaintenancePage />} />
            </Route>
        )
    )
    return router
}