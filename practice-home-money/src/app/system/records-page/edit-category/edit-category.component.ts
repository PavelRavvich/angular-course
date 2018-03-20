import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Category} from '../../shared/models/category.model';
import {CategoriesService} from '../../shared/services/categories.service';
import {Massage} from '../../../shared/model/massage.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'pr-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  @Input() categories: Category[] = [];
  @Output() onCategoryEdit = new EventEmitter<Category>();

  currentCategoryId = 1;
  currentCategory: Category;
  massage: Massage;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.massage = new Massage('success', '');
    this.onCategoryChange();
  }

  onSubmit(form: NgForm) {
    const {capacity, name} = form.value;
    const category = new Category(name, capacity, +this.currentCategoryId);
    if (capacity < 0) {
      category.capacity = capacity * -1;
    }
    this.subscription = this.categoriesService.updateCategory(category)
      .subscribe((c: Category) => {
        this.onCategoryEdit.emit(c);
        this.massage.text = 'Категория успешно отредактирована';
        window.setTimeout(() => this.massage.text = '', 5000);
      });
  }

  onCategoryChange() {
    this.currentCategory = this.categories
      .find(c => c.id === +this.currentCategoryId);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
