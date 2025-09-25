if (!customElements.get('product-modal')) {
  customElements.define(
    'product-modal',
    class ProductModal extends ModalDialog {
      constructor() {
        super();
      }

      hide() {
        super.hide();
      }

      show(opener) {
        super.show(opener);
        this.showActiveMedia();
      }

      showActiveMedia() {
        this.querySelectorAll(
          `[data-media-id]:not([data-media-id="${this.openedBy.getAttribute('data-media-id')}"])`
        ).forEach((element) => {
          element.classList.remove('active');
        });
        const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute('data-media-id')}"]`);
        const activeMediaTemplate = activeMedia.querySelector('template');
        const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
        activeMedia.classList.add('active');
        activeMedia.scrollIntoView();

        const container = this.querySelector('[role="document"]');
        container.scrollLeft = (activeMedia.width - container.clientWidth) / 2;

        if (
          activeMedia.nodeName == 'DEFERRED-MEDIA' &&
          activeMediaContent &&
          activeMediaContent.querySelector('.js-youtube')
        )
          activeMedia.loadContent();
      }

      // Add navigation event listeners
      const prevButton = this.querySelector('.product-media-modal__nav--prev');
      const nextButton = this.querySelector('.product-media-modal__nav--next');

      if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => this.navigateMedia('prev'));
        nextButton.addEventListener('click', () => this.navigateMedia('next'));
      }
    }

    // Navigation method
    navigateMedia(direction) {
      const activeMedia = this.querySelector('[data-media-id].active');
      const allMedia = Array.from(this.querySelectorAll('[data-media-id]'));
      const currentIndex = allMedia.indexOf(activeMedia);

      let newIndex;
      if (direction === 'prev') {
        newIndex = currentIndex - 1 < 0 ? allMedia.length - 1 : currentIndex - 1;
      } else {
        newIndex = currentIndex + 1 >= allMedia.length ? 0 : currentIndex + 1;
      }

      // Hide current, show new
      activeMedia.classList.remove('active');
      allMedia[newIndex].classList.add('active');
      allMedia[newIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  );
}
