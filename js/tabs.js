/**
 * Provider Tabs Functionality
 * Handles tab switching for different health insurance providers
 */

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const providerPanels = document.querySelectorAll('.provider-panel');
    
    // Check if elements exist
    if (tabButtons.length === 0 || providerPanels.length === 0) {
        console.warn('Tab elements not found');
        return;
    }
    
    // Tab click handler
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.getAttribute('data-provider');
            
            // Remove active class from all tabs
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            
            // Hide all panels
            providerPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.setAttribute('aria-hidden', 'true');
            });
            
            // Show selected panel
            const selectedPanel = document.querySelector(`.provider-panel[data-provider="${provider}"]`);
            if (selectedPanel) {
                selectedPanel.classList.add('active');
                selectedPanel.setAttribute('aria-hidden', 'false');
                
                // Scroll to panel on mobile
                if (window.innerWidth <= 768) {
                    selectedPanel.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }
            }
        });
    });
    
    // Keyboard navigation for accessibility
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            let targetIndex = index;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    targetIndex = index - 1;
                    if (targetIndex < 0) targetIndex = tabButtons.length - 1;
                    break;
                    
                case 'ArrowRight':
                    e.preventDefault();
                    targetIndex = index + 1;
                    if (targetIndex >= tabButtons.length) targetIndex = 0;
                    break;
                    
                case 'Home':
                    e.preventDefault();
                    targetIndex = 0;
                    break;
                    
                case 'End':
                    e.preventDefault();
                    targetIndex = tabButtons.length - 1;
                    break;
            }
            
            if (targetIndex !== index) {
                tabButtons[targetIndex].focus();
                tabButtons[targetIndex].click();
            }
        });
    });
    
    // Initialize ARIA attributes
    tabButtons.forEach((button, index) => {
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        button.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });
    
    providerPanels.forEach((panel, index) => {
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
    });
    
    // Add role to tab container
    const tabsContainer = document.querySelector('.provider-tabs');
    if (tabsContainer) {
        tabsContainer.setAttribute('role', 'tablist');
    }
    
    // Initialize Show More functionality for plans
    initializeShowMoreButtons();
});

/**
 * Initialize Show More buttons for plans
 * Shows only first 3 plans, hides the rest
 */
function initializeShowMoreButtons() {
    const providerPanels = document.querySelectorAll('.provider-panel');
    
    providerPanels.forEach(panel => {
        const plansGrid = panel.querySelector('.plans-grid');
        if (!plansGrid) return;
        
        const planCards = plansGrid.querySelectorAll('.plan-card');
        
        // If there are more than 3 plans, hide the rest and add show more button
        if (planCards.length > 3) {
            // Hide plans after the first 3
            planCards.forEach((card, index) => {
                if (index >= 3) {
                    card.classList.add('hidden-plan');
                }
            });
            
            // Create show more button
            const showMoreContainer = document.createElement('div');
            showMoreContainer.className = 'plans-show-more';
            
            const showMoreBtn = document.createElement('button');
            showMoreBtn.className = 'btn btn-show-more';
            showMoreBtn.textContent = 'Ver más';
            showMoreBtn.setAttribute('aria-expanded', 'false');
            showMoreBtn.setAttribute('aria-label', 'Mostrar más planes');
            
            showMoreBtn.addEventListener('click', function() {
                const hiddenPlans = plansGrid.querySelectorAll('.hidden-plan');
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                if (!isExpanded) {
                    // Show all hidden plans
                    hiddenPlans.forEach(plan => {
                        plan.classList.add('visible');
                    });
                    this.textContent = 'Ver menos';
                    this.setAttribute('aria-expanded', 'true');
                } else {
                    // Hide plans again
                    hiddenPlans.forEach(plan => {
                        plan.classList.remove('visible');
                    });
                    this.textContent = 'Ver más';
                    this.setAttribute('aria-expanded', 'false');
                    
                    // Scroll back to the button
                    this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
            
            showMoreContainer.appendChild(showMoreBtn);
            plansGrid.appendChild(showMoreContainer);
        }
    });
}
