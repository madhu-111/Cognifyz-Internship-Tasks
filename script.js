const backgroundColors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)'
        ];
        
        let currentColorIndex = 0;
        let clickCounter = 0;

        const colorChangeBtn = document.getElementById('colorChangeBtn');
        const counterBtn = document.getElementById('counterBtn');
        const messageBtn = document.getElementById('messageBtn');
        const clickCountDisplay = document.getElementById('clickCount');
        const messageBox = document.getElementById('messageBox');
        
        colorChangeBtn.addEventListener('click', function() {
            currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
            document.body.style.background = backgroundColors[currentColorIndex];
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
            }, 100);
            
            console.log('Background color changed to:', backgroundColors[currentColorIndex]);
        });
        
        counterBtn.addEventListener('click', function() {
            clickCounter++;
            clickCountDisplay.textContent = clickCounter;
            
            // Add pulsing animation to counter
            clickCountDisplay.style.transform = 'scale(1.2)';
            clickCountDisplay.style.color = '#ffff00';
            
            setTimeout(() => {
                clickCountDisplay.style.transform = 'scale(1)';
                clickCountDisplay.style.color = 'white';
            }, 200);
            
            if (clickCounter === 10) {
                showMessage("🎉 You've clicked 10 times! Great job!");
            } else if (clickCounter === 25) {
                showMessage("🚀 25 clicks! You're on fire!");
            } else if (clickCounter === 50) {
                showMessage("💯 Half century! Amazing dedication!");
            }
        });
        
        messageBtn.addEventListener('click', function() {
            const messages = [
                "🌟 Welcome to interactive web development!",
                "💡 JavaScript makes websites come alive!",
                "🎨 Responsive design adapts to every screen!",
                "⚡ Modern web technologies are amazing!",
                "🔥 Keep exploring and learning!",
                "🎯 Great job testing the functionality!",
                "✨ You're mastering web interactivity!"
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            showMessage(randomMessage);
        });
        
        function showMessage(text) {
            messageBox.textContent = text;
            messageBox.classList.add('show');
            
            setTimeout(() => {
                messageBox.classList.remove('show');
            }, 3000);
        }
        
        document.addEventListener('keydown', function(event) {
            // Press 'C' to change color
            if (event.key.toLowerCase() === 'c') {
                colorChangeBtn.click();
            }
            if (event.code === 'Space') {
                event.preventDefault();
                counterBtn.click();
            }
            if (event.key.toLowerCase() === 'm') {
                messageBtn.click();
            }
        });
        
        window.addEventListener('load', function() {
            setTimeout(() => {
                showMessage("👋 Welcome! Try the interactive buttons above!");
            }, 1000);
        });
        
        clickCountDisplay.addEventListener('dblclick', function() {
            clickCounter = 0;
            this.textContent = '0';
            showMessage("🔄 Counter reset! Starting fresh!");
        });
        
        document.querySelectorAll('.interactive-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('Button clicked:', this.textContent.trim());
            });
        });