import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import scipy.stats as ss
from scipy import ndimage
import os
import sklearn
from sklearn import cross_validation
from sklearn.cross_validation import train_test_split
from sklearn.model_selection import ShuffleSplit
import glob
from keras.preprocessing import image
from keras.applications.imagenet_utils import preprocess_input
from matplotlib.pyplot import imshow
from sklearn.neural_network import MLPClassifier
get_ipython().run_line_magic('matplotlib', 'notebook')

path='./ml train images'
os.chdir(path)
data = pd.DataFrame()
image_list = []
label_list = []
labels = []
dim = 0
for folder in os.listdir('.'):
    labels += [folder]
    for file in os.listdir(folder + '/'):
        img = image.load_img(folder + '/' + file, target_size=(64, 64))
        x = image.img_to_array(img)
        x = np.expand_dims(x, axis=0)
        l = preprocess_input(x)
        image_list += [l]
        row = [0]*6 #6 different labels
        row[dim] = 1
        label_list += [row]
    dim += 1        
x_train = np.concatenate((image_list))
y_train = np.array(label_list)
sh = x_train.shape
col_dim = sh[1]*sh[2]*sh[3]
xx = x_train.reshape([sh[0], col_dim])
clf = MLPClassifier(solver='lbfgs', alpha=1e-5,
                    hidden_layer_sizes=(10), random_state=1)
clf.fit(xx, y_train)
def claim_prediction(picture_file):
    #turning raw data into array:
    img = image.load_img(picture_file, target_size=(64, 64))
    x_claim = image.img_to_array(img)
    x_claim = np.expand_dims(x_claim, axis=0)
    x_claim = preprocess_input(x_claim)
    #reshaping array:
    sh = x_claim.shape
    col_dim = sh[1]*sh[2]*sh[3]
    xx = x_claim.reshape([sh[0], col_dim])
    y = clf.predict(xx.reshape(1, -1))
    position = np.argmax(y)
    return ([labels[position], position])