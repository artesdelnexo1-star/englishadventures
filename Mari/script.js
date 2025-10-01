document.addEventListener("DOMContentLoaded", () => {
  console.log("English Adventures loaded successfully")

  initSidebarNavigation()
  initSmoothScrolling()
  initFadeInAnimations()
  initActiveSectionTracking()
  initMobileSidebarNavigation()
  initResponsiveHandlers()
  initMobileHamburgerButton()

  initColorCycling()
})

function initColorCycling() {
  // Define color themes based on the project's palette
  const colorThemes = [
    {
      name: "blue-theme",
      primary: "#5b7ccb",
      secondary: "#0052a3",
      accent: "#ff8a61",
      accentSecondary: "#ffbdef",
      accentTertiary: "#c4e2ef",
      dark: "#2d3748",
      lightBg: "#f1e9f2",
    },
    {
      name: "purple-theme",
      primary: "#9b59b6",
      secondary: "#8e44ad",
      accent: "#e74c3c",
      accentSecondary: "#f39c12",
      accentTertiary: "#3498db",
      dark: "#2c3e50",
      lightBg: "#f4ecf7",
    },
    {
      name: "green-theme",
      primary: "#27ae60",
      secondary: "#16a085",
      accent: "#e67e22",
      accentSecondary: "#f1c40f",
      accentTertiary: "#1abc9c",
      dark: "#2c3e50",
      lightBg: "#e8f8f5",
    },
    {
      name: "orange-theme",
      primary: "#e67e22",
      secondary: "#d35400",
      accent: "#c0392b",
      accentSecondary: "#9b59b6",
      accentTertiary: "#f39c12",
      dark: "#34495e",
      lightBg: "#fef5e7",
    },
    {
      name: "pink-theme",
      primary: "#e91e63",
      secondary: "#c2185b",
      accent: "#ff5722",
      accentSecondary: "#9c27b0",
      accentTertiary: "#ff9800",
      dark: "#37474f",
      lightBg: "#fce4ec",
    },
  ]

  let currentThemeIndex = 0

  function applyColorTheme(theme) {
    const root = document.documentElement

    // Apply new color values to CSS variables
    root.style.setProperty("--primary-color", theme.primary)
    root.style.setProperty("--secondary-color", theme.secondary)
    root.style.setProperty("--accent-color", theme.accent)
    root.style.setProperty("--accent-secondary", theme.accentSecondary)
    root.style.setProperty("--accent-tertiary", theme.accentTertiary)
    root.style.setProperty("--dark-color", theme.dark)
    root.style.setProperty("--light-bg", theme.lightBg)

    console.log(`[v0] Color theme changed to: ${theme.name}`)
  }

  function cycleColors() {
    // Move to next theme
    currentThemeIndex = (currentThemeIndex + 1) % colorThemes.length
    applyColorTheme(colorThemes[currentThemeIndex])
  }

  // Start color cycling every 10 seconds
  setInterval(cycleColors, 10000)

  console.log("[v0] Color cycling initialized - colors will change every 10 seconds")
}

function initMobileHamburgerButton() {
  const mobileHamburger = document.getElementById("mobileHamburger")
  const sidebar = document.getElementById("sidebar")
  const sidebarOverlay = document.getElementById("sidebarOverlay")

  if (mobileHamburger) {
    mobileHamburger.addEventListener("click", (e) => {
      e.stopPropagation()

      // Toggle sidebar
      if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        sidebarOverlay.classList.remove("active")
      } else {
        sidebar.classList.add("active")
        sidebarOverlay.classList.add("active")
      }
    })

    // Update hamburger animation based on sidebar state
    const observer = new MutationObserver(() => {
      const hamburgerLines = mobileHamburger.querySelectorAll(".hamburger-line")
      if (sidebar.classList.contains("active")) {
        mobileHamburger.classList.add("active")
        hamburgerLines.forEach((line) => (line.style.backgroundColor = "#ff8a61"))
      } else {
        mobileHamburger.classList.remove("active")
        hamburgerLines.forEach((line) => (line.style.backgroundColor = "white"))
      }
    })

    observer.observe(sidebar, { attributes: true, attributeFilter: ["class"] })
  }
}

function initSidebarNavigation() {
  const menuLinks = document.querySelectorAll(".menu-link")
  const contentSections = document.querySelectorAll(".content-section")

  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetSection = link.getAttribute("data-section")

      // Remove active class from all menu items and content sections
      document.querySelectorAll(".menu-item").forEach((item) => item.classList.remove("active"))
      contentSections.forEach((section) => section.classList.remove("active"))

      // Add active class to clicked menu item and corresponding content
      link.parentElement.classList.add("active")
      const targetContent = document.getElementById(targetSection)
      if (targetContent) {
        targetContent.classList.add("active")
      }

      const sidebar = document.getElementById("sidebar")
      const sidebarOverlay = document.getElementById("sidebarOverlay")
      if (window.innerWidth <= 768 && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        sidebarOverlay.classList.remove("active")
      }

      // Smooth scroll to top when switching sections
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  })
}

function initMobileSidebarNavigation() {
  const sidebarToggle = document.getElementById("sidebarToggle")
  const sidebar = document.getElementById("sidebar")
  const sidebarOverlay = document.getElementById("sidebarOverlay")

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (e) => {
      e.stopPropagation()
      sidebar.classList.toggle("active")
      sidebarOverlay.classList.toggle("active")
    })
  }

  // Close sidebar when clicking overlay
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", () => {
      sidebar.classList.remove("active")
      sidebarOverlay.classList.remove("active")
    })
  }

  // Close sidebar when clicking outside
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 768 &&
      !sidebar.contains(e.target) &&
      !sidebarToggle?.contains(e.target) &&
      !e.target.closest(".mobile-hamburger-btn") &&
      sidebar.classList.contains("active")
    ) {
      sidebar.classList.remove("active")
      sidebarOverlay.classList.remove("active")
    }
  })

  // Close sidebar on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      sidebar.classList.remove("active")
      sidebarOverlay.classList.remove("active")
    }
  })

  let touchStartX = 0
  let touchStartY = 0
  let touchEndX = 0
  let touchEndY = 0
  let isSwiping = false

  document.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX
      touchStartY = e.changedTouches[0].screenY
      isSwiping = false
    },
    { passive: true },
  )

  document.addEventListener(
    "touchmove",
    (e) => {
      if (Math.abs(e.changedTouches[0].screenX - touchStartX) > 10) {
        isSwiping = true
      }
    },
    { passive: true },
  )

  document.addEventListener(
    "touchend",
    (e) => {
      if (!isSwiping) return

      touchEndX = e.changedTouches[0].screenX
      touchEndY = e.changedTouches[0].screenY
      handleSwipeGesture()
    },
    { passive: true },
  )

  function handleSwipeGesture() {
    const swipeThreshold = 100
    const swipeDistanceX = touchEndX - touchStartX
    const swipeDistanceY = Math.abs(touchEndY - touchStartY)

    // Only handle horizontal swipes
    if (window.innerWidth <= 768 && swipeDistanceY < 100) {
      // Swipe right from left edge to open sidebar
      if (touchStartX < 50 && swipeDistanceX > swipeThreshold && !sidebar.classList.contains("active")) {
        sidebar.classList.add("active")
        sidebarOverlay.classList.add("active")
      }
      // Swipe left to close sidebar when it's open
      else if (swipeDistanceX < -swipeThreshold && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        sidebarOverlay.classList.remove("active")
      }
    }
  }
}

function initResponsiveHandlers() {
  // Handle orientation changes on mobile devices
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      const sidebar = document.getElementById("sidebar")
      const sidebarOverlay = document.getElementById("sidebarOverlay")

      // Close sidebar on orientation change to prevent layout issues
      if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        sidebarOverlay.classList.remove("active")
      }

      window.dispatchEvent(new Event("resize"))
    }, 100)
  })

  let resizeTimeout
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      const sidebar = document.getElementById("sidebar")
      const sidebarOverlay = document.getElementById("sidebarOverlay")

      // Close sidebar when switching to desktop view
      if (window.innerWidth > 768) {
        sidebar.classList.remove("active")
        sidebarOverlay.classList.remove("active")
      }

      console.log("[v0] Window resized, layout updated")
    }, 250)
  })
}

function openPDF(pdfPath) {
  try {
    // Crear una nueva ventana/pestaña para mostrar el PDF
    const newWindow = window.open(pdfPath, "_blank")

    // Verificar si la ventana se abrió correctamente
    if (!newWindow) {
      // Si el popup fue bloqueado, mostrar mensaje alternativo
      alert(
        'Por favor, permite las ventanas emergentes para descargar el PDF, o haz clic derecho y selecciona "Abrir en nueva pestaña"',
      )

      // Como alternativa, crear un enlace de descarga
      const link = document.createElement("a")
      link.href = pdfPath
      link.download = pdfPath.split("/").pop() // Obtener solo el nombre del archivo
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      // Enfocar la nueva ventana
      newWindow.focus()
    }
  } catch (error) {
    console.error("Error al abrir el PDF:", error)
    alert("Hubo un error al intentar abrir el PDF. Por favor, intenta de nuevo.")
  }
}

// Smooth Scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

function initActiveSectionTracking() {
  const sections = document.querySelectorAll("section[id]")
  const menuItems = document.querySelectorAll(".menu-item")

  const observerOptions = {
    threshold: 0.3,
    rootMargin: "-100px 0px -50% 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id

        menuItems.forEach((item) => {
          item.classList.remove("active")
          const link = item.querySelector(".menu-link")
          if (link && link.getAttribute("data-section") === sectionId) {
            item.classList.add("active")
          }
        })
      }
    })
  }, observerOptions)

  sections.forEach((section) => {
    observer.observe(section)
  })
}

function initFadeInAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document
    .querySelectorAll(
      ".team-card, .quiz-card, .development-message, .taller-card, .video-card, .glossary-category, .trimester-card",
    )
    .forEach((el) => {
      observer.observe(el)
    })
}

// Progress animation
function animateProgress() {
  const progressFill = document.querySelector(".progress-fill")
  if (progressFill) {
    setTimeout(() => {
      progressFill.style.width = "75%"
    }, 500)
  }
}
