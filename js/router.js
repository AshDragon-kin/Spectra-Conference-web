class Router {
    constructor(routes) {
        this.routes = routes;
        this.mainContent = document.getElementById('main-content');
        
        // Handle navigation
        window.addEventListener('popstate', () => this.handleRoute());
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="/"]')) {
                e.preventDefault();
                const href = e.target.getAttribute('href');
                this.navigate(href);
            }
        });

        // Initial route
        this.handleRoute();
    }

    async handleRoute() {
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes['*'];
        
        try {
            const content = await route();
            this.mainContent.innerHTML = content;
        } catch (error) {
            console.error('Error loading route:', error);
            this.mainContent.innerHTML = '<div class="text-center py-12"><h1 class="text-2xl font-bold text-red-600">Error loading page</h1></div>';
        }
    }

    navigate(path) {
        window.history.pushState(null, '', path);
        this.handleRoute();
    }
}

// Define routes
const routes = {
    '/': () => `
        <div class="text-center py-12">
            <h1 class="text-4xl font-bold mb-6">Welcome to Spectra</h1>
            <p class="text-xl text-gray-600 mb-8">Your platform for innovation and technology</p>
            <a href="/signup" class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Get Started</a>
        </div>
    `,
    '/about': () => `
        <div class="max-w-3xl mx-auto py-12">
            <h1 class="text-3xl font-bold mb-6">About Us</h1>
            <p class="text-gray-600 mb-4">Spectra is dedicated to bringing people together through technology and innovation.</p>
            <p class="text-gray-600">Our mission is to create a platform where ideas can flourish and connections can be made.</p>
        </div>
    `,
    '/contact': () => `
        <div class="max-w-3xl mx-auto py-12">
            <h1 class="text-3xl font-bold mb-6">Contact Us</h1>
            <form class="space-y-4">
                <div>
                    <label class="block text-gray-700 mb-2">Name</label>
                    <input type="text" class="w-full px-4 py-2 border rounded-md">
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">Email</label>
                    <input type="email" class="w-full px-4 py-2 border rounded-md">
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">Message</label>
                    <textarea class="w-full px-4 py-2 border rounded-md" rows="4"></textarea>
                </div>
                <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Send Message</button>
            </form>
        </div>
    `,
    '/login': () => `
        <div class="max-w-md mx-auto py-12">
            <h1 class="text-3xl font-bold mb-6">Login</h1>
            <form class="space-y-4">
                <div>
                    <label class="block text-gray-700 mb-2">Email</label>
                    <input type="email" class="w-full px-4 py-2 border rounded-md">
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">Password</label>
                    <input type="password" class="w-full px-4 py-2 border rounded-md">
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Login</button>
            </form>
        </div>
    `,
    '/signup': () => `
        <div class="max-w-md mx-auto py-12">
            <h1 class="text-3xl font-bold mb-6">Sign Up</h1>
            <form class="space-y-4">
                <div>
                    <label class="block text-gray-700 mb-2">Name</label>
                    <input type="text" class="w-full px-4 py-2 border rounded-md">
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">Email</label>
                    <input type="email" class="w-full px-4 py-2 border rounded-md">
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">Password</label>
                    <input type="password" class="w-full px-4 py-2 border rounded-md">
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Create Account</button>
            </form>
        </div>
    `,
    '*': () => `
        <div class="text-center py-12">
            <h1 class="text-4xl font-bold text-red-600 mb-4">404</h1>
            <p class="text-xl text-gray-600 mb-8">Page not found</p>
            <a href="/" class="text-blue-600 hover:text-blue-800">Go back home</a>
        </div>
    `
};

// Initialize router
const router = new Router(routes); 