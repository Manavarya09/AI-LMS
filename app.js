// Application Data
const appData = {
  users: [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@student.edu",
      role: "student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      joinDate: "2024-01-15",
      points: 2450,
      level: 12,
      streak: 15,
      completedCourses: 8,
      certificates: 3
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      email: "sarah@instructor.edu",
      role: "instructor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      expertise: ["Machine Learning", "Data Science"],
      rating: 4.9,
      students: 245,
      coursesCreated: 12
    }
  ],
  courses: [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      description: "Learn the fundamentals of ML with hands-on projects and real-world applications. This comprehensive course covers supervised learning, unsupervised learning, and deep learning concepts.",
      instructor: "Dr. Sarah Chen",
      rating: 4.8,
      students: 1234,
      duration: "8 weeks",
      difficulty: "Beginner",
      price: "Free",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
      tags: ["AI", "Python", "Data Science"],
      lessons: 24,
      progress: 65
    },
    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React with hooks, context, and advanced patterns. Build complex applications with state management, performance optimization, and modern React features.",
      instructor: "John Smith",
      rating: 4.7,
      students: 892,
      duration: "10 weeks",
      difficulty: "Advanced",
      price: "$99",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      tags: ["React", "JavaScript", "Frontend"],
      lessons: 32,
      progress: 23
    },
    {
      id: 3,
      title: "Python for Data Science",
      description: "Complete Python programming course focusing on data analysis, visualization, and machine learning libraries like pandas, numpy, and scikit-learn.",
      instructor: "Dr. Sarah Chen",
      rating: 4.9,
      students: 1567,
      duration: "12 weeks",
      difficulty: "Intermediate",
      price: "$79",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop",
      tags: ["Python", "Data Science", "Analytics"],
      lessons: 36,
      progress: 0
    }
  ],
  achievements: [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first lesson",
      icon: "🏆",
      earned: true,
      earnedDate: "2024-01-16"
    },
    {
      id: 2,
      name: "Streak Master",
      description: "Maintain a 7-day learning streak",
      icon: "🔥",
      earned: true,
      earnedDate: "2024-01-23"
    },
    {
      id: 3,
      name: "AI Explorer",
      description: "Ask 10 questions to AI assistant",
      icon: "🤖",
      earned: false
    },
    {
      id: 4,
      name: "Course Completionist",
      description: "Complete 5 courses",
      icon: "📚",
      earned: true,
      earnedDate: "2024-02-15"
    },
    {
      id: 5,
      name: "Social Learner",
      description: "Participate in 3 group discussions",
      icon: "👥",
      earned: false
    }
  ],
  doubts: [
    {
      id: 1,
      question: "What is the difference between supervised and unsupervised learning?",
      subject: "Machine Learning",
      status: "resolved",
      aiResponse: "Supervised learning uses labeled data to train models for prediction or classification, while unsupervised learning finds hidden patterns in unlabeled data through clustering or dimensionality reduction.",
      timestamp: "2024-06-17T14:30:00Z",
      confidence: 0.95
    },
    {
      id: 2,  
      question: "How do I implement useState in React functional components?",
      subject: "React Development",
      status: "resolved",
      aiResponse: "useState is a React Hook that lets you add state to functional components. Import it from React and call it with an initial value: const [state, setState] = useState(initialValue). It returns an array with the current state and a setter function.",
      timestamp: "2024-06-17T16:45:00Z",
      confidence: 0.98
    }
  ],
  leaderboard: [
    {
      rank: 1,
      name: "Alex Johnson",
      points: 2450,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
      rank: 2,
      name: "Maria Garcia",
      points: 2380,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
    },
    {
      rank: 3,
      name: "James Wilson",
      points: 2290,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    },
    {
      rank: 4,
      name: "Emma Davis",
      points: 2150,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    },
    {
      rank: 5,
      name: "Michael Brown",
      points: 2020,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    }
  ],
  notifications: [
    {
      id: 1,
      type: "achievement",
      title: "New Achievement Unlocked!",
      message: "You've earned the Streak Master badge",
      timestamp: "2024-06-17T10:00:00Z",
      read: false
    },
    {
      id: 2,
      type: "doubt",
      title: "Your doubt was answered",
      message: "AI assistant answered your ML question",
      timestamp: "2024-06-17T14:35:00Z",
      read: true
    }
  ]
};

// Current user state
let currentUser = null;
let currentTheme = localStorage.getItem('theme') || 'light';

// DOM Elements
const loadingOverlay = document.getElementById('loadingOverlay');
const sidebar = document.getElementById('sidebar');
const userMenu = document.getElementById('userMenu');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const themeToggle = document.getElementById('themeToggle');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  updateThemeToggle();
  
  // Setup forms
  setupAuthForms();
  
  // Initialize whiteboard
  initializeWhiteboard();
  
  // Setup page navigation
  navigateTo('home');
  
  // Show a welcome notification
  setTimeout(() => {
    showNotification('Welcome to EduAI', 'AI-powered learning at your fingertips.', 'info');
  }, 1000);
  
  // Populate initial content
  renderCourses();
  renderDoubtHistory();
  renderAchievements();
  renderLeaderboard();
  setupChat();
  
  // Initialize charts after a delay
  setTimeout(() => {
    initializeCharts();
  }, 1500);
});

// Navigation
function navigateTo(pageId) {
  showLoading();
  
  setTimeout(() => {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
      
      // Special handling for certain pages
      if (pageId === 'dashboard' && currentUser) {
        renderDashboard();
      } else if (pageId === 'courses') {
        renderCourses();
      } else if (pageId === 'analytics' && currentUser) {
        setTimeout(() => initializeCharts(), 100);
      }
      
      // Update URL hash
      window.location.hash = pageId;
      
      // Show/hide sidebar based on authentication
      updateSidebarVisibility();
    }
    
    hideLoading();
  }, 300);
}

// Handle back button
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1);
  if (hash && hash !== '') {
    navigateTo(hash);
  }
});

// Authentication
function setupAuthForms() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showLoading();
      
      setTimeout(() => {
        const email = loginForm.querySelector('input[type="email"]').value;
        
        // Find matching user or use default student for demo
        let user = appData.users.find(u => u.email.toLowerCase() === email.toLowerCase());
        
        if (!user) {
          // Create demo user for any email
          user = {
            id: 999,
            name: "Demo User",
            email: email,
            role: "student",
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
            joinDate: new Date().toISOString().split('T')[0],
            points: 1250,
            level: 8,
            streak: 5,
            completedCourses: 3,
            certificates: 1
          };
        }
        
        // Login with user
        login(user);
        showNotification('Login Successful', `Welcome back, ${user.name}!`, 'success');
        navigateTo('dashboard');
        
        hideLoading();
      }, 1000);
    });
  }
  
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(registerForm);
      const name = registerForm.querySelector('input[type="text"]').value;
      const email = registerForm.querySelector('input[type="email"]').value;
      const role = registerForm.querySelector('select').value;
      
      if (!name || !email || !role) {
        showNotification('Registration Failed', 'Please fill in all required fields.', 'error');
        return;
      }
      
      showLoading();
      
      setTimeout(() => {
        // Create new user
        const newUser = {
          id: appData.users.length + 1,
          name: name,
          email: email,
          role: role,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
          joinDate: new Date().toISOString().split('T')[0],
          points: 0,
          level: 1,
          streak: 0,
          completedCourses: 0,
          certificates: 0
        };
        
        // Add role-specific properties
        if (role === 'instructor') {
          newUser.expertise = [];
          newUser.rating = 0;
          newUser.students = 0;
          newUser.coursesCreated = 0;
        }
        
        // Add to users array
        appData.users.push(newUser);
        
        // Login with new user
        login(newUser);
        showNotification('Registration Successful', `Welcome to EduAI, ${newUser.name}!`, 'success');
        navigateTo('dashboard');
        
        hideLoading();
      }, 1000);
    });
  }
}

function login(user) {
  currentUser = user;
  
  // Update UI for logged in user
  if (userMenu) {
    userMenu.classList.remove('hidden');
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    if (userAvatar) userAvatar.src = user.avatar;
    if (userName) userName.textContent = user.name;
  }
  
  // Hide login/register buttons
  if (loginBtn) loginBtn.classList.add('hidden');
  if (registerBtn) registerBtn.classList.add('hidden');
  
  // Show sidebar for logged in users
  updateSidebarVisibility();
}

function logout() {
  currentUser = null;
  
  // Update UI for logged out user
  if (userMenu) userMenu.classList.add('hidden');
  
  // Show login/register buttons
  if (loginBtn) loginBtn.classList.remove('hidden');
  if (registerBtn) registerBtn.classList.remove('hidden');
  
  // Hide sidebar
  sidebar.classList.remove('visible');
  sidebar.classList.add('hidden');
  
  // Navigate to home
  navigateTo('home');
  
  showNotification('Logged Out', 'You have been logged out successfully.', 'info');
}

// Update sidebar visibility based on authentication
function updateSidebarVisibility() {
  if (currentUser) {
    sidebar.classList.remove('hidden');
  } else {
    sidebar.classList.add('hidden');
  }
}

// Toggle sidebar visibility
function toggleSidebar() {
  sidebar.classList.toggle('visible');
}

// Course functions
function renderCourses() {
  const coursesGrid = document.getElementById('coursesGrid');
  if (!coursesGrid) return;
  
  // Clear existing courses
  coursesGrid.innerHTML = '';
  
  // Render courses
  appData.courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.innerHTML = `
      <img src="${course.image}" alt="${course.title}" class="course-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSIxNTAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Db3Vyc2UgSW1hZ2U8L3RleHQ+PC9zdmc+'">
      <div class="course-body">
        <h3 class="course-title">${course.title}</h3>
        <p class="course-instructor">Instructor: ${course.instructor}</p>
        <p>${course.description}</p>
        <div class="course-tags">
          ${course.tags.map(tag => `<span class="course-tag">${tag}</span>`).join('')}
        </div>
        <div class="course-meta">
          <span class="course-rating">★ ${course.rating}</span>
          <span>${course.students} students</span>
          <span>${course.duration}</span>
          <span class="course-price">${course.price}</span>
        </div>
        ${currentUser && course.progress > 0 ? `
          <div class="course-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${course.progress}%;"></div>
            </div>
            <div class="progress-text">${course.progress}% complete</div>
          </div>
        ` : ''}
        <button class="btn btn--primary mt-8" onclick="viewCourseDetail(${course.id})">
          ${currentUser && course.progress > 0 ? 'Continue Learning' : 'View Course'}
        </button>
      </div>
    `;
    coursesGrid.appendChild(courseCard);
  });
  
  // Add search functionality
  const searchInput = document.getElementById('courseSearch');
  if (searchInput) {
    searchInput.addEventListener('input', filterCourses);
  }
  
  // Add difficulty filter functionality
  const difficultyFilter = document.getElementById('difficultyFilter');
  if (difficultyFilter) {
    difficultyFilter.addEventListener('change', filterCourses);
  }
}

function filterCourses() {
  const searchQuery = document.getElementById('courseSearch')?.value.toLowerCase() || '';
  const difficultyFilter = document.getElementById('difficultyFilter')?.value || '';
  const courses = document.querySelectorAll('.course-card');
  
  courses.forEach(course => {
    const title = course.querySelector('.course-title').textContent.toLowerCase();
    const instructor = course.querySelector('.course-instructor').textContent.toLowerCase();
    const description = course.querySelector('p').textContent.toLowerCase();
    const courseData = appData.courses.find(c => c.title === course.querySelector('.course-title').textContent);
    const difficulty = courseData ? courseData.difficulty : '';
    
    const matchesSearch = title.includes(searchQuery) || 
                         instructor.includes(searchQuery) || 
                         description.includes(searchQuery);
                         
    const matchesDifficulty = !difficultyFilter || difficulty === difficultyFilter;
    
    if (matchesSearch && matchesDifficulty) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
  });
}

function viewCourseDetail(courseId) {
  const course = appData.courses.find(c => c.id === courseId);
  if (!course) return;
  
  const courseDetailContent = document.getElementById('courseDetailContent');
  if (!courseDetailContent) return;
  
  courseDetailContent.innerHTML = `
    <div class="course-detail">
      <div class="course-header">
        <h2>${course.title}</h2>
        <div class="course-meta">
          <p><strong>Instructor:</strong> ${course.instructor}</p>
          <p><strong>Rating:</strong> ★ ${course.rating} (${course.students} students)</p>
          <p><strong>Duration:</strong> ${course.duration}</p>
          <p><strong>Difficulty:</strong> ${course.difficulty}</p>
          <p><strong>Price:</strong> ${course.price}</p>
        </div>
        <div class="course-tags">
          ${course.tags.map(tag => `<span class="course-tag">${tag}</span>`).join('')}
        </div>
        ${currentUser && course.progress > 0 ? `
          <div class="course-progress mt-8">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${course.progress}%;"></div>
            </div>
            <div class="progress-text">${course.progress}% complete</div>
          </div>
        ` : ''}
      </div>
      <div class="course-content">
        <h3>Course Description</h3>
        <p>${course.description}</p>
        
        <h3>Course Lessons (${course.lessons} total)</h3>
        <div class="lesson-list">
          ${Array(Math.min(course.lessons, 8)).fill().map((_, i) => `
            <div class="lesson-item" onclick="viewLesson(${courseId}, ${i+1})">
              <div class="lesson-icon">
                ${currentUser && i < (course.progress / 100 * course.lessons) ? '<i class="fas fa-check-circle" style="color: #1FB8CD"></i>' : '<i class="fas fa-play-circle" style="color: #626C71"></i>'}
              </div>
              <div class="lesson-title">Lesson ${i+1}: ${getLessonTitle(course.title, i+1)}</div>
              <div class="lesson-duration">15 min</div>
            </div>
          `).join('')}
          ${course.lessons > 8 ? `<div class="lesson-item"><div class="lesson-title">... and ${course.lessons - 8} more lessons</div></div>` : ''}
        </div>
        
        <button class="btn btn--primary mt-8" onclick="${currentUser ? `startCourse(${courseId})` : `navigateTo('login')`}">
          ${currentUser ? (course.progress > 0 ? 'Continue Learning' : 'Start Course') : 'Login to Enroll'}
        </button>
      </div>
    </div>
  `;
  
  navigateTo('course-detail');
}

function getLessonTitle(courseTitle, lessonNumber) {
  // Generate lesson titles based on course title
  const mlLessons = [
    "Introduction to Machine Learning",
    "Data Preparation and Cleaning",
    "Supervised Learning Algorithms",
    "Unsupervised Learning Techniques",
    "Neural Networks Basics",
    "Deep Learning Introduction",
    "Model Evaluation and Validation",
    "Feature Engineering Strategies",
  ];
  
  const reactLessons = [
    "React Fundamentals",
    "Working with Components",
    "State and Props Management",
    "Hooks in Detail",
    "Context API and State Management",
    "Performance Optimization",
    "Testing React Applications",
    "Deployment Strategies",
  ];
  
  const pythonLessons = [
    "Python Syntax and Basics",
    "Data Types and Structures",
    "Control Flow and Functions",
    "Object-Oriented Programming",
    "File Handling and I/O",
    "Error Handling",
    "Libraries and Modules",
    "Advanced Python Concepts",
  ];
  
  if (courseTitle.includes("Machine Learning")) {
    return mlLessons[(lessonNumber - 1) % mlLessons.length];
  } else if (courseTitle.includes("React")) {
    return reactLessons[(lessonNumber - 1) % reactLessons.length];
  } else {
    return pythonLessons[(lessonNumber - 1) % pythonLessons.length];
  }
}

function startCourse(courseId) {
  if (!currentUser) {
    navigateTo('login');
    return;
  }
  
  showNotification('Course Started', 'Good luck with your learning journey!', 'success');
  // Update progress for demo
  const course = appData.courses.find(c => c.id === courseId);
  if (course && course.progress === 0) {
    course.progress = 10;
    renderCourses();
  }
}

function viewLesson(courseId, lessonId) {
  if (!currentUser) {
    navigateTo('login');
    return;
  }
  
  showNotification('Lesson Loaded', `Starting lesson ${lessonId}. Keep up the great work!`, 'info');
}

// Dashboard functions
function renderDashboard() {
  if (!currentUser) {
    navigateTo('home');
    return;
  }
  
  const dashboardTitle = document.getElementById('dashboardTitle');
  const dashboardStats = document.getElementById('dashboardStats');
  const dashboardContent = document.getElementById('dashboardContent');
  
  if (dashboardTitle) {
    dashboardTitle.textContent = `Welcome back, ${currentUser.name}!`;
  }
  
  if (dashboardStats) {
    if (currentUser.role === 'student') {
      dashboardStats.innerHTML = `
        <div class="stat-card">
          <h4>Current Level</h4>
          <div class="metric">Level ${currentUser.level}</div>
        </div>
        <div class="stat-card">
          <h4>Learning Streak</h4>
          <div class="metric">🔥 ${currentUser.streak} days</div>
        </div>
        <div class="stat-card">
          <h4>Total Points</h4>
          <div class="metric">${currentUser.points.toLocaleString()} XP</div>
        </div>
        <div class="stat-card">
          <h4>Completed Courses</h4>
          <div class="metric">${currentUser.completedCourses}</div>
        </div>
      `;
    } else if (currentUser.role === 'instructor') {
      dashboardStats.innerHTML = `
        <div class="stat-card">
          <h4>Courses Created</h4>
          <div class="metric">${currentUser.coursesCreated || 0}</div>
        </div>
        <div class="stat-card">
          <h4>Total Students</h4>
          <div class="metric">${currentUser.students || 0}</div>
        </div>
        <div class="stat-card">
          <h4>Average Rating</h4>
          <div class="metric">★ ${currentUser.rating || 0}</div>
        </div>
      `;
    }
  }
  
  if (dashboardContent) {
    if (currentUser.role === 'student') {
      dashboardContent.innerHTML = `
        <h3>Continue Learning</h3>
        <div class="courses-grid">
          ${appData.courses.filter(course => course.progress > 0).map(course => `
            <div class="course-card">
              <img src="${course.image}" alt="${course.title}" class="course-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSIxNTAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Db3Vyc2UgSW1hZ2U8L3RleHQ+PC9zdmc+'">
              <div class="course-body">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-instructor">Instructor: ${course.instructor}</p>
                <div class="course-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: ${course.progress}%;"></div>
                  </div>
                  <div class="progress-text">${course.progress}% complete</div>
                </div>
                <button class="btn btn--primary mt-8" onclick="viewCourseDetail(${course.id})">Continue Learning</button>
              </div>
            </div>
          `).join('')}
        </div>
        
        <h3 class="mt-8">Recent Achievements</h3>
        <div class="achievements-grid">
          ${appData.achievements.filter(a => a.earned).slice(0, 4).map(achievement => `
            <div class="achievement-card">
              <div class="achievement-icon">${achievement.icon}</div>
              <div class="achievement-name">${achievement.name}</div>
              <div class="achievement-desc">${achievement.description}</div>
              <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 8px;">
                Earned: ${formatDate(achievement.earnedDate)}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (currentUser.role === 'instructor') {
      dashboardContent.innerHTML = `
        <h3>Your Courses</h3>
        <div class="courses-grid">
          ${appData.courses.filter(course => course.instructor === currentUser.name).map(course => `
            <div class="course-card">
              <img src="${course.image}" alt="${course.title}" class="course-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSIxNTAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Db3Vyc2UgSW1hZ2U8L3RleHQ+PC9zdmc+'">
              <div class="course-body">
                <h3 class="course-title">${course.title}</h3>
                <div class="course-meta">
                  <span class="course-rating">★ ${course.rating}</span>
                  <span>${course.students} students</span>
                </div>
                <button class="btn btn--primary mt-8" onclick="viewCourseDetail(${course.id})">Manage Course</button>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="card mt-8">
          <div class="card__body">
            <h3>Student Engagement</h3>
            <div class="analytics-cards">
              <div class="stat-card">
                <h4>Active Students</h4>
                <div class="metric">156</div>
              </div>
              <div class="stat-card">
                <h4>Completion Rate</h4>
                <div class="metric">87%</div>
              </div>
              <div class="stat-card">
                <h4>Average Rating</h4>
                <div class="metric">★ 4.8</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
}

// AI Doubt Clarification
function renderDoubtHistory() {
  const doubtHistory = document.getElementById('doubtHistory');
  if (!doubtHistory) return;
  
  doubtHistory.innerHTML = '';
  
  if (appData.doubts.length === 0) {
    doubtHistory.innerHTML = '<p>No questions asked yet. Try asking your first question!</p>';
    return;
  }
  
  appData.doubts.forEach(doubt => {
    const doubtItem = document.createElement('div');
    doubtItem.className = 'doubt-item';
    doubtItem.innerHTML = `
      <div class="doubt-question">${doubt.question}</div>
      <span class="doubt-subject">${doubt.subject}</span>
      ${doubt.aiResponse ? `
        <div class="doubt-response">
          <strong>AI Response:</strong><br>
          ${doubt.aiResponse}
          ${doubt.confidence ? `<div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">Confidence: ${Math.round(doubt.confidence * 100)}%</div>` : ''}
        </div>
      ` : ''}
      <div class="doubt-meta">
        <span>${formatDate(doubt.timestamp)}</span>
        <span class="doubt-status ${doubt.status === 'resolved' ? 'status-resolved' : 'status-pending'}">
          ${doubt.status}
        </span>
      </div>
    `;
    doubtHistory.appendChild(doubtItem);
  });
  
  // Setup doubt form submission
  const doubtForm = document.getElementById('doubtForm');
  if (doubtForm && !doubtForm.hasAttribute('data-setup')) {
    doubtForm.setAttribute('data-setup', 'true');
    doubtForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (!currentUser) {
        showNotification('Authentication Required', 'Please log in to submit questions.', 'warning');
        navigateTo('login');
        return;
      }
      
      const subject = doubtForm.querySelector('select').value;
      const question = doubtForm.querySelector('textarea').value;
      
      if (subject && question) {
        showLoading();
        
        // Simulate AI processing time
        setTimeout(() => {
          // Create a new doubt
          const newDoubt = {
            id: appData.doubts.length + 1,
            question: question,
            subject: subject,
            status: 'resolved',
            aiResponse: generateAIResponse(question, subject),
            timestamp: new Date().toISOString(),
            confidence: 0.88 + Math.random() * 0.12 // Random confidence between 88-100%
          };
          
          // Add to doubts array
          appData.doubts.unshift(newDoubt);
          
          // Re-render doubt history
          renderDoubtHistory();
          
          // Clear form
          doubtForm.reset();
          
          hideLoading();
          showNotification('Question Answered', 'The AI assistant has answered your question!', 'success');
        }, 1500);
      }
    });
  }
}

function generateAIResponse(question, subject) {
  // Enhanced AI response simulation
  const responses = {
    "Machine Learning": [
      "Machine learning involves training algorithms to learn patterns from data and make predictions or decisions without being explicitly programmed for each specific task.",
      "Neural networks are computational models inspired by the human brain, consisting of interconnected nodes (neurons) organized in layers that process and transform input data.",
      "Overfitting occurs when a model learns the training data too well, including noise and outliers, which reduces its ability to generalize to new, unseen data.",
      "Feature engineering is the process of selecting, modifying, or creating new features from raw data to improve machine learning model performance.",
      "Cross-validation is a technique used to assess how well a model will generalize to independent data by partitioning the data into training and validation sets multiple times.",
    ],
    "React Development": [
      "React hooks are functions that allow you to use state and other React features in functional components, making code more reusable and easier to understand.",
      "The Context API provides a way to share data between components without having to pass props down through every level of the component tree (prop drilling).",
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript, making React components more readable and expressive.",
      "The Virtual DOM is React's in-memory representation of the real DOM that helps optimize rendering by calculating the most efficient way to update the user interface.",
      "State management in React involves controlling and updating component data over time, which can be done using useState for local state or Context/Redux for global state.",
    ],
    "Data Science": [
      "Data science combines statistical analysis, machine learning, and domain expertise to extract insights and knowledge from structured and unstructured data.",
      "Exploratory Data Analysis (EDA) involves examining datasets to understand their structure, identify patterns, detect anomalies, and formulate hypotheses for further analysis.",
      "A p-value represents the probability of obtaining results at least as extreme as those observed, assuming the null hypothesis is true. Lower p-values indicate stronger evidence against the null hypothesis.",
      "Data visualization transforms complex datasets into graphical representations that make patterns, trends, and relationships easier to understand and communicate.",
      "Statistical significance indicates whether observed differences in data are likely due to actual effects rather than random chance, typically determined using p-values and confidence intervals.",
    ],
    "Python": [
      "Python is a high-level, interpreted programming language known for its simple syntax, readability, and extensive library ecosystem, making it popular for various applications.",
      "List comprehensions provide a concise and readable way to create new lists by applying an expression to each item in an existing iterable, often replacing traditional for loops.",
      "Decorators in Python are a powerful feature that allows you to modify the behavior of functions or classes without permanently changing their code structure.",
      "The Global Interpreter Lock (GIL) in Python prevents multiple threads from executing Python bytecode simultaneously, which can limit performance in CPU-bound multi-threaded programs.",
      "Object-oriented programming in Python uses classes and objects to organize code into reusable components, supporting inheritance, encapsulation, and polymorphism.",
    ]
  };
  
  // Choose appropriate response based on subject
  const subjectResponses = responses[subject] || responses["Machine Learning"];
  return subjectResponses[Math.floor(Math.random() * subjectResponses.length)];
}

// Collaboration
function initializeWhiteboard() {
  const canvas = document.getElementById('whiteboard');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  
  // Set white background
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Set drawing style
  ctx.strokeStyle = '#1FB8CD';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // Setup drawing
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
  
  function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
  
  function draw(e) {
    if (!isDrawing) return;
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
  
  function stopDrawing() {
    isDrawing = false;
  }
}

function setupChat() {
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  
  if (!chatInput || !chatMessages) return;
  
  const sampleMessages = [
    { name: "Dr. Chen", text: "Welcome to today's study session! We'll be covering neural networks.", time: "2:00 PM", type: "instructor" },
    { name: "Maria", text: "Hi everyone! I'm excited to learn about backpropagation.", time: "2:01 PM", type: "student" },
    { name: "James", text: "I've been working on the assignment. Any tips for improving accuracy?", time: "2:02 PM", type: "student" },
    { name: "Dr. Chen", text: "Great question, James! Let's discuss feature engineering techniques.", time: "2:03 PM", type: "instructor" }
  ];
  
  // Clear existing messages
  chatMessages.innerHTML = '';
  
  // Populate with sample messages
  sampleMessages.forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${msg.type === 'instructor' ? 'message-instructor' : 'message-other'}`;
    messageDiv.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <strong>${msg.name}:</strong>
        <span style="font-size: 11px; color: var(--color-text-secondary);">${msg.time}</span>
      </div>
      <div style="margin-top: 4px;">${msg.text}</div>
    `;
    chatMessages.appendChild(messageDiv);
  });
  
  // Setup enter key for chat input
  if (chatInput && !chatInput.hasAttribute('data-setup')) {
    chatInput.setAttribute('data-setup', 'true');
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
}

function sendMessage() {
  if (!currentUser) {
    showNotification('Login Required', 'Please log in to participate in chat.', 'warning');
    return;
  }
  
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  
  if (!chatInput || !chatMessages || !chatInput.value.trim()) return;
  
  const messageText = chatInput.value.trim();
  
  // Create message element
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message message-user';
  
  const now = new Date();
  const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  
  messageDiv.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <strong>You:</strong>
      <span style="font-size: 11px; color: var(--color-text-secondary);">${timeStr}</span>
    </div>
    <div style="margin-top: 4px;">${messageText}</div>
  `;
  
  // Add to chat
  chatMessages.appendChild(messageDiv);
  
  // Clear input
  chatInput.value = '';
  
  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  // Simulate response after delay
  setTimeout(() => {
    const responseDiv = document.createElement('div');
    responseDiv.className = 'message message-other';
    
    // Sample responses
    const responses = [
      "That's a great point! Let's explore that concept further.",
      "I think we should consider alternative approaches to this problem.",
      "Have you tried implementing that with the techniques we discussed?",
      "Excellent question! This relates to what we covered in the last session.",
      "Can you share more details about your implementation approach?"
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    const responders = ["Dr. Chen", "Maria", "James", "Emma"];
    const responder = responders[Math.floor(Math.random() * responders.length)];
    
    responseDiv.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <strong>${responder}:</strong>
        <span style="font-size: 11px; color: var(--color-text-secondary);">${timeStr}</span>
      </div>
      <div style="margin-top: 4px;">${randomResponse}</div>
    `;
    
    chatMessages.appendChild(responseDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000 + Math.random() * 2000);
}

// Gamification
function renderAchievements() {
  const achievementsGrid = document.getElementById('achievementsGrid');
  if (!achievementsGrid) return;
  
  achievementsGrid.innerHTML = '';
  
  appData.achievements.forEach(achievement => {
    const achievementCard = document.createElement('div');
    achievementCard.className = `achievement-card ${!achievement.earned ? 'achievement-locked' : ''}`;
    achievementCard.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-name">${achievement.name}</div>
      <div class="achievement-desc">${achievement.description}</div>
      ${achievement.earned && achievement.earnedDate ? `
        <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 8px;">
          Earned: ${formatDate(achievement.earnedDate)}
        </div>
      ` : ''}
      ${!achievement.earned ? `
        <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 8px;">
          🔒 Not yet earned
        </div>
      ` : ''}
    `;
    
    achievementsGrid.appendChild(achievementCard);
  });
}

function renderLeaderboard() {
  const leaderboardEl = document.getElementById('leaderboard');
  if (!leaderboardEl) return;
  
  leaderboardEl.innerHTML = '';
  
  appData.leaderboard.forEach(entry => {
    const leaderboardItem = document.createElement('div');
    leaderboardItem.className = 'leaderboard-item';
    leaderboardItem.innerHTML = `
      <div class="leaderboard-rank">#${entry.rank}</div>
      <img src="${entry.avatar}" alt="${entry.name}" class="leaderboard-avatar">
      <div class="leaderboard-name">${entry.name}</div>
      <div class="leaderboard-points">${entry.points.toLocaleString()} XP</div>
    `;
    
    leaderboardEl.appendChild(leaderboardItem);
  });
}

// Analytics & Charts
function initializeCharts() {
  setTimeout(() => {
    // Progress Chart
    const progressCtx = document.getElementById('progressChart');
    if (progressCtx) {
      new Chart(progressCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Study Hours',
            backgroundColor: 'rgba(31, 184, 205, 0.2)',
            borderColor: '#1FB8CD',
            data: [3.5, 2.8, 4.2, 3.1, 5.0, 2.5, 3.8],
            fill: true,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Hours'
              }
            }
          }
        }
      });
    }
    
    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart');
    if (performanceCtx) {
      new Chart(performanceCtx, {
        type: 'radar',
        data: {
          labels: ['Machine Learning', 'React', 'Python', 'Data Science', 'Web Dev', 'Algorithms'],
          datasets: [{
            label: 'Your Skills',
            backgroundColor: 'rgba(31, 184, 205, 0.2)',
            borderColor: '#1FB8CD',
            pointBackgroundColor: '#1FB8CD',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#1FB8CD',
            data: [85, 70, 92, 78, 65, 73]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          },
          scales: {
            r: {
              beginAtZero: true,
              max: 100,
              ticks: {
                stepSize: 20
              }
            }
          }
        }
      });
    }
  }, 200);
}

// Utility Functions
function showLoading() {
  if (loadingOverlay) {
    loadingOverlay.classList.remove('hidden');
  }
}

function hideLoading() {
  if (loadingOverlay) {
    loadingOverlay.classList.add('hidden');
  }
}

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

function showNotification(title, message, type = 'info') {
  const notifications = document.getElementById('notifications');
  if (!notifications) return;
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-header">
      <strong>${title}</strong>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
    <div class="notification-body">
      ${message}
    </div>
  `;
  
  // Add to notifications container
  notifications.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.opacity = '0';
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 300);
    }
  }, 5000);
}

// Theme switching
function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  currentTheme = newTheme;
  
  // Update HTML attribute
  document.documentElement.setAttribute('data-color-scheme', newTheme);
  
  // Update toggle button
  updateThemeToggle();
  
  // Store preference
  localStorage.setItem('theme', newTheme);
  
  showNotification('Theme Updated', `Switched to ${newTheme} mode.`, 'info');
}

function updateThemeToggle() {
  if (themeToggle) {
    themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';
  }
}