/**
 *  разделим ответственность и
 *  избавимся от дублирования логики открытия попапа, используя отдельный класс.
 */

interface IFilmController {
  openDetails(): void
  isPopupOpened(): boolean
}

class FilmController implements IFilmController {
  private popupService: PopupService

  constructor(popupService: PopupService) {
    this.popupService = popupService
  }

  openDetails() {
    this.popupService.openPopup()
  }

  isPopupOpened() {
    return this.popupService.isPopupOpened()
  }
}

