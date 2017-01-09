__author__ = 'Jacco Kulman'

import unittest
import time

class StructSeqTest(unittest.TestCase):

    def _test_tuple(self):
        t = time.gmtime()
        self.assertIsInstance(t, tuple)
        astuple = tuple(t)
        self.assertEqual(len(t), len(astuple))
        self.assertEqual(t, astuple)

        # Check that slicing works the same way; at one point, slicing t[i:j] with
        # 0 < i < j could produce NULLs in the result.
        for i in range(-len(t), len(t)):
            self.assertEqual(t[i:], astuple[i:])
            for j in range(-len(t), len(t)):
                self.assertEqual(t[i:j], astuple[i:j])

        for j in range(-len(t), len(t)):
            self.assertEqual(t[:j], astuple[:j])

        self.assertRaises(IndexError, lambda: t.__getitem__(-len(t)-1))
        self.assertRaises(IndexError, lambda: t.__getitem__(len(t)))
        for i in range(-len(t), len(t)-1):
            self.assertEqual(t[i], astuple[i])

    def test_repr(self):
        t = time.gmtime()
        self.assertTrue(repr(t))
        t = time.gmtime(0)
        self.assertEqual(repr(t),
            "time.struct_time(tm_year=1970, tm_mon=1, tm_mday=1, tm_hour=0, "
            "tm_min=0, tm_sec=0, tm_wday=3, tm_yday=1, tm_isdst=0)")

    def test_concat(self):
        t1 = time.gmtime()
        t2 = t1 + tuple(t1)
        for i in xrange(len(t1)):
            self.assertEqual(t2[i], t2[i+len(t1)])

    def test_repeat(self):
        t1 = time.gmtime()
        t2 = 3 * t1
        for i in xrange(len(t1)):
            self.assertEqual(t2[i], t2[i+len(t1)])
            self.assertEqual(t2[i], t2[i+2*len(t1)])

    def test_contains(self):
        t1 = time.gmtime()
        for item in t1:
            self.assertIn(item, t1)
        self.assertNotIn(-42, t1)

    def test_hash(self):
        t1 = time.gmtime()
        self.assertEqual(hash(t1), hash(tuple(t1)))

    def test_cmp(self):
        t1 = time.gmtime()
        t2 = type(t1)(t1)
        self.assertEqual(t1, t2)
        self.assertTrue(not (t1 < t2))
        self.assertTrue(t1 <= t2)
        self.assertTrue(not (t1 > t2))
        self.assertTrue(t1 >= t2)
        self.assertTrue(not (t1 != t2))

    def _test_fields(self):
        t = time.gmtime()
        self.assertEqual(len(t), t.n_fields)
        self.assertEqual(t.n_fields, t.n_sequence_fields+t.n_unnamed_fields)

    def test_getattr(self):
        t = time.gmtime(0)
        self.assertEqual(t.tm_year, 1970)
        self.assertRaises(AttributeError, lambda : t.tm_nonexistent_attr)

    def test_constructor(self):
        t = time.struct_time

        self.assertRaises(TypeError, t)
        self.assertRaises(TypeError, t, None)
        self.assertRaises(TypeError, t, "123")
        #self.assertRaises(TypeError,t, "123", dict={})
        #self.assertRaises(ValueError,t, "123456789", dict=None)

        s = "123456789"
        self.assertEqual("".join(t(s)), s)

    def test_eviltuple(self):

        # Devious code could crash structseqs' contructors
        class C:
            def __getitem__(self, i):
                raise TypeError("eviltuple error")
            def __len__(self):
                return 9

        self.assertRaises(TypeError, time.struct_time, C())

    def _test_reduce(self):
        t = time.gmtime()
        x = t.__reduce__()

    def test_extended_getslice(self):
        # Test extended slicing by comparing with list slicing.
        t = time.gmtime()
        L = list(t)
        indices = (0, None, 1, 3, 19, 300, -1, -2, -31, -300)
        for start in indices:
            for stop in indices:
                # Skip step 0 (invalid)
                for step in indices[1:]:
                    self.assertEqual(list(t[start:stop:step]),
                                     L[start:stop:step])

    def _test_writability(self):
        def change(s):
            s.tm_mon = 30

        x = time.struct_time((1,2,3,4,5,6,7,8,9))
        self.assertRaises(AttributeError, lambda: change(x))

if __name__ == '__main__':
    unittest.main()