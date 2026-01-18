/*!
 * DevTools Detector & Page Protection
 * Detects browser DevTools and blurs/hides page content
 */

(function() {
    'use strict';
    
    // Skip detector on localhost:12346
    if (window.location.href.indexOf('127.0.0.1:12346') !== -1) {
        return;
    }
    
    var isDevToolsOpen = false;
    var threshold = 160;
    
    // Create blur overlay
    function createBlurOverlay() {
        var overlay = document.createElement('div');
        overlay.id = 'devtools-blur-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: 999999;
            display: none;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
        `;
        
        var message = document.createElement('div');
        message.style.cssText = `
            color: #ff4444;
            font-size: 24px;
            text-align: center;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            border: 2px solid #ff4444;
        `;
        message.innerHTML = `
            <h2 style="margin: 0 0 20px 0;">⚠️ Developer Tools Detected</h2>
            <p style="margin: 0;">Please close the developer tools to continue.</p>
        `;
        
        overlay.appendChild(message);
        document.body.appendChild(overlay);
        return overlay;
    }
    
    // Apply blur effect
    function applyBlur() {
        if (isDevToolsOpen) return;
        
        isDevToolsOpen = true;
        var overlay = document.getElementById('devtools-blur-overlay') || createBlurOverlay();
        overlay.style.display = 'flex';
        
        // Blur all body content
        document.body.style.filter = 'blur(10px)';
        document.body.style.userSelect = 'none';
        document.body.style.pointerEvents = 'none';
        
        // Disable right-click
        document.addEventListener('contextmenu', preventActions);
        
        // Disable shortcuts
        document.addEventListener('keydown', preventActions);
    }
    
    // Remove blur effect
    function removeBlur() {
        if (!isDevToolsOpen) return;
        
        isDevToolsOpen = false;
        var overlay = document.getElementById('devtools-blur-overlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
        
        document.body.style.filter = '';
        document.body.style.userSelect = '';
        document.body.style.pointerEvents = '';
    }
    
    // Prevent actions
    function preventActions(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    
    // Method 1: Window size detection
    function checkWindowSize() {
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            applyBlur();
        } else {
            removeBlur();
        }
    }
    
    // Method 2: Console detection
    var element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            applyBlur();
            throw new Error('DevTools detected');
        }
    });
    
    // Method 3: Performance timing
    function checkDevTools() {
        var start = performance.now();
        debugger;
        var end = performance.now();
        
        if (end - start > 100) {
            applyBlur();
        }
    }
    
    // Method 4: toString override
    var devtools = /./;
    devtools.toString = function() {
        applyBlur();
        return 'devtools';
    };
    
    // Method 5: Firebug detection
    if (window.console && (window.console.firebug || (window.console.exception && window.console.table))) {
        applyBlur();
    }
    
    // Method 6: Chrome DevTools detection
    var checkStatus;
    var devtoolsOpen = false;
    var element2 = new Image();
    
    Object.defineProperty(element2, 'id', {
        get: function() {
            devtoolsOpen = true;
            applyBlur();
        }
    });
    
    setInterval(function() {
        devtoolsOpen = false;
        console.log(element2);
        console.clear();
        
        if (devtoolsOpen) {
            applyBlur();
        }
    }, 1000);
    
    // Continuous monitoring
    setInterval(checkWindowSize, 500);
    setInterval(checkDevTools, 1000);
    
    // Monitor window resize
    window.addEventListener('resize', checkWindowSize);
    
    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault();
            applyBlur();
            return false;
        }
        
        // Ctrl+Shift+I or Cmd+Option+I
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            applyBlur();
            return false;
        }
        
        // Ctrl+Shift+J or Cmd+Option+J
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            applyBlur();
            return false;
        }
        
        // Ctrl+U or Cmd+U
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 85) {
            e.preventDefault();
            applyBlur();
            return false;
        }
        
        // Ctrl+Shift+C or Cmd+Option+C
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            applyBlur();
            return false;
        }
    });
    
    // Initial check
    checkWindowSize();
    
    // Debug protection
    (function() {
        function detectDevTools() {
            if (window.outerWidth - window.innerWidth > threshold || 
                window.outerHeight - window.innerHeight > threshold) {
                applyBlur();
            }
        }
        
        if (window.addEventListener) {
            window.addEventListener('load', detectDevTools, false);
            window.addEventListener('resize', detectDevTools, false);
        }
    })();
    
})();
