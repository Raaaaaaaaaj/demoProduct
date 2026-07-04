import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { ProductService } from '../../../core/services/product.service';
import { ProductList } from '../components/product-list/product-list';
import { ProductPage } from './product-page.component';

describe('ProductPage', () => {
  let component: ProductPage;
  let fixture: ComponentFixture<ProductPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPage],
      providers: [
        {
          provide: ProductService,
          useValue: {
            getProducts: () => of([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should pass updated filters to the product list component', () => {
    const updatedFilters = {
      search: 'shoe',
      minPrice: 100,
      maxPrice: 500,
      sortBy: 'priceAsc',
    };

    component.onFilterChanged(updatedFilters);
    fixture.detectChanges();

    const productList = fixture.debugElement.query(By.directive(ProductList)).componentInstance as ProductList;

    expect(productList.filters).toEqual(updatedFilters);
  });
});
